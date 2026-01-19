<?php
/**
 * Quick Contact Form Handler
 * Sklair Films - sklairfilms.com
 */

require_once __DIR__ . '/config.php';

// Solo permitir POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(false, 'Method not allowed', 405);
}

// Obtener datos JSON del body
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    sendResponse(false, 'Invalid request data', 400);
}

// Verificar honeypot (anti-spam)
if (!checkHoneypot($data)) {
    // Simular éxito para no alertar al bot
    sendResponse(true, 'Message sent successfully');
}

// Obtener y sanitizar campos
$name = isset($data['name']) ? sanitizeInput($data['name']) : '';
$email = isset($data['email']) ? sanitizeInput($data['email']) : '';
$message = isset($data['message']) ? sanitizeInput($data['message']) : '';

// Validaciones
if (empty($name)) {
    sendResponse(false, 'Name is required', 400);
}

if (empty($email)) {
    sendResponse(false, 'Email is required', 400);
}

if (!isValidEmail($email)) {
    sendResponse(false, 'Invalid email address', 400);
}

if (empty($message)) {
    sendResponse(false, 'Message is required', 400);
}

if (strlen($message) < 10) {
    sendResponse(false, 'Message is too short', 400);
}

// Construir email HTML
$emailHtml = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #001A28; border-bottom: 2px solid #B91D20; padding-bottom: 10px;">
            Quick Contact Form Submission
        </h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ' . $name . '</p>
            <p><strong>Email:</strong> ' . $email . '</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 5px;">' . nl2br($message) . '</p>
        </div>
        
        <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This email was sent from the Sklair Films website contact form.<br>
            Sent on: ' . date('Y-m-d H:i:s') . '
        </p>
    </div>
</body>
</html>
';

// Headers del email
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: ' . CONTACT_FROM_NAME . ' <' . CONTACT_FROM_EMAIL . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion()
];

$subject = 'Quick Contact from ' . $name . ' - Sklair Films';

// Enviar email
$sent = mail(
    CONTACT_TO_EMAIL,
    $subject,
    $emailHtml,
    implode("\r\n", $headers)
);

if ($sent) {
    // Guardar en archivo JSON
    saveSubmission('contacts', [
        'name' => $name,
        'email' => $email,
        'message' => $message
    ]);
    sendResponse(true, 'Message sent successfully');
} else {
    error_log('Failed to send quick contact email from: ' . $email);
    sendResponse(false, 'Failed to send message. Please try again later.', 500);
}
