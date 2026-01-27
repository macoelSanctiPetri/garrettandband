<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
$data = [];

if (stripos($contentType, 'application/json') !== false) {
  $raw = file_get_contents('php://input');
  $json = json_decode($raw, true);
  if (is_array($json)) {
    $data = $json;
  }
} else {
  $data = $_POST;
}

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$type = trim((string)($data['type'] ?? 'General'));
$message = trim((string)($data['message'] ?? ''));
$honeypot = trim((string)($data['company'] ?? $data['_gotcha'] ?? ''));

if ($honeypot !== '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Spam detected']);
  exit;
}

if ($name === '' || $email === '' || $message === '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Missing fields']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Invalid email']);
  exit;
}

$to = 'contacto@garrettandband.com';
$subject = 'Contacto web - ' . ($type !== '' ? $type : 'General');

$bodyLines = [
  'Nombre: ' . $name,
  'Email: ' . $email,
  'Motivo: ' . ($type !== '' ? $type : 'General'),
  'Mensaje:',
  $message,
];
$body = implode("\n", $bodyLines);

$headers = [];
$headers[] = 'From: Web Contact <no-reply@garrettandband.com>';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headersStr = implode("\r\n", $headers);

$sent = @mail($to, $subject, $body, $headersStr);

if ($sent) {
  $ackSubject = 'Hemos recibido tu mensaje';
  $ackBodyLines = [
    'Hola ' . $name . ',',
    '',
    'Hemos recibido tu mensaje correctamente.',
    'Te responderemos lo antes posible.',
    '',
    'Este correo es automatico, por favor no respondas a este mensaje.',
    '',
    'Gracias,',
    'Garrett&Band',
  ];
  $ackBody = implode("\n", $ackBodyLines);

  $ackHeaders = [];
  $ackHeaders[] = 'From: Garrett&Band <no-reply@garrettandband.com>';
  $ackHeaders[] = 'Reply-To: contacto@garrettandband.com';
  $ackHeaders[] = 'Content-Type: text/plain; charset=UTF-8';
  $ackHeadersStr = implode("\r\n", $ackHeaders);

  @mail($email, $ackSubject, $ackBody, $ackHeadersStr);

  echo json_encode(['ok' => true]);
  exit;
}

http_response_code(500);
echo json_encode(['ok' => false, 'error' => 'Mail failed']);
