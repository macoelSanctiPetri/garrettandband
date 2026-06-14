param(
  [string]$BranchName = "out-backup",
  [string]$CommitMessage = "Backup exported out snapshot"
)

$ErrorActionPreference = "Stop"

function Run-Git {
  param([string[]]$GitArgs)
  & git @GitArgs
  if ($LASTEXITCODE -ne 0) {
    throw "Git command failed: git $($GitArgs -join ' ')"
  }
}

$currentBranch = (git branch --show-current).Trim()
if (-not $currentBranch) {
  throw "Could not determine the current branch."
}

$branchExists = git show-ref --verify --quiet "refs/heads/$BranchName"
if ($LASTEXITCODE -eq 0) {
  Run-Git -GitArgs @("switch", $BranchName)
} else {
  Run-Git -GitArgs @("switch", "-c", $BranchName)
}

try {
  Run-Git -GitArgs @("add", "-f", "out")

  $stagedOutChanges = git diff --cached --name-only -- out
  if (-not $stagedOutChanges) {
    Write-Host "No staged changes detected in out/. Nothing to commit."
    exit 0
  }

  Run-Git -GitArgs @("commit", "-m", $CommitMessage)
  Run-Git -GitArgs @("push", "-u", "origin", $BranchName)
}
finally {
  Run-Git -GitArgs @("switch", $currentBranch)
}
