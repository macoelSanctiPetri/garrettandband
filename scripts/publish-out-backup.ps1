param(
  [string]$BranchName = "out-backup",
  [string]$CommitMessage = "Backup exported out snapshot"
)

$ErrorActionPreference = "Stop"

function Run-Git {
  param([string[]]$Args)
  & git @Args
  if ($LASTEXITCODE -ne 0) {
    throw "Git command failed: git $($Args -join ' ')"
  }
}

$currentBranch = (git branch --show-current).Trim()
if (-not $currentBranch) {
  throw "Could not determine the current branch."
}

$branchExists = git show-ref --verify --quiet "refs/heads/$BranchName"
if ($LASTEXITCODE -eq 0) {
  Run-Git @("switch", $BranchName)
} else {
  Run-Git @("switch", "-c", $BranchName)
}

try {
  Run-Git @("add", "-f", "out")

  $stagedOutChanges = git diff --cached --name-only -- out
  if (-not $stagedOutChanges) {
    Write-Host "No staged changes detected in out/. Nothing to commit."
    exit 0
  }

  Run-Git @("commit", "-m", $CommitMessage)
  Run-Git @("push", "-u", "origin", $BranchName)
}
finally {
  Run-Git @("switch", $currentBranch)
}
