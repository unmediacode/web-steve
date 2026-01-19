<?php
/**
 * Project Brief Form Handler
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
    sendResponse(true, 'Brief submitted successfully');
}

// Obtener y sanitizar campos obligatorios
$name = isset($data['name']) ? sanitizeInput($data['name']) : '';
$email = isset($data['email']) ? sanitizeInput($data['email']) : '';

// Campos opcionales
$phone = isset($data['phone']) ? sanitizeInput($data['phone']) : '';
$company = isset($data['company']) ? sanitizeInput($data['company']) : '';
$projectType = isset($data['projectType']) ? sanitizeInput($data['projectType']) : '';
$projectTitle = isset($data['projectTitle']) ? sanitizeInput($data['projectTitle']) : '';
$description = isset($data['description']) ? sanitizeInput($data['description']) : '';
$objectives = isset($data['objectives']) ? sanitizeInput($data['objectives']) : '';
$targetAudience = isset($data['targetAudience']) ? sanitizeInput($data['targetAudience']) : '';
$budget = isset($data['budget']) ? sanitizeInput($data['budget']) : '';
$timeline = isset($data['timeline']) ? sanitizeInput($data['timeline']) : '';
$deliverables = isset($data['deliverables']) ? sanitizeInput($data['deliverables']) : '';
$references = isset($data['references']) ? sanitizeInput($data['references']) : '';
$additionalInfo = isset($data['additionalInfo']) ? sanitizeInput($data['additionalInfo']) : '';

// Validaciones obligatorias
if (empty($name)) {
    sendResponse(false, 'Name is required', 400);
}

if (empty($email)) {
    sendResponse(false, 'Email is required', 400);
}

if (!isValidEmail($email)) {
    sendResponse(false, 'Invalid email address', 400);
}

// Generar ID único para el brief
$briefId = 'BRIEF-' . date('Ymd') . '-' . substr(uniqid(), -6);

// Construir email HTML
$emailHtml = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 700px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #001A28; border-bottom: 2px solid #B91D20; padding-bottom: 10px;">
            New Project Brief Submission
        </h2>
        
        <p style="background-color: #001A28; color: white; padding: 10px; border-radius: 5px;">
            <strong>Brief ID:</strong> ' . $briefId . '
        </p>
        
        <!-- Contact Information -->
        <h3 style="color: #B91D20; margin-top: 25px;">Contact Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee; width: 30%;"><strong>Name:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">' . $name . '</td>
            </tr>
            <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">' . $email . '</td>
            </tr>
            ' . ($phone ? '<tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">' . $phone . '</td>
            </tr>' : '') . '
            ' . ($company ? '<tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Company:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">' . $company . '</td>
            </tr>' : '') . '
        </table>
        
        <!-- Project Details -->
        <h3 style="color: #B91D20; margin-top: 25px;">Project Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
            ' . ($projectType ? '<tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee; width: 30%;"><strong>Project Type:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">' . $projectType . '</td>
            </tr>' : '') . '
            ' . ($projectTitle ? '<tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Project Title:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">' . $projectTitle . '</td>
            </tr>' : '') . '
            ' . ($budget ? '<tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Budget:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">' . $budget . '</td>
            </tr>' : '') . '
            ' . ($timeline ? '<tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Timeline:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">' . $timeline . '</td>
            </tr>' : '') . '
        </table>
        
        ' . ($description ? '
        <h3 style="color: #B91D20; margin-top: 25px;">Project Description</h3>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            ' . nl2br($description) . '
        </div>' : '') . '
        
        ' . ($objectives ? '
        <h3 style="color: #B91D20; margin-top: 25px;">Objectives</h3>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            ' . nl2br($objectives) . '
        </div>' : '') . '
        
        ' . ($targetAudience ? '
        <h3 style="color: #B91D20; margin-top: 25px;">Target Audience</h3>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            ' . nl2br($targetAudience) . '
        </div>' : '') . '
        
        ' . ($deliverables ? '
        <h3 style="color: #B91D20; margin-top: 25px;">Deliverables</h3>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            ' . nl2br($deliverables) . '
        </div>' : '') . '
        
        ' . ($references ? '
        <h3 style="color: #B91D20; margin-top: 25px;">References / Examples</h3>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            ' . nl2br($references) . '
        </div>' : '') . '
        
        ' . ($additionalInfo ? '
        <h3 style="color: #B91D20; margin-top: 25px;">Additional Information</h3>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            ' . nl2br($additionalInfo) . '
        </div>' : '') . '
        
        <p style="color: #666; font-size: 12px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px;">
            This project brief was submitted from the Sklair Films website.<br>
            Submitted on: ' . date('Y-m-d H:i:s') . '
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

$subject = 'New Project Brief: ' . ($projectTitle ? $projectTitle : $briefId) . ' - Sklair Films';

// Enviar email
$sent = mail(
    CONTACT_TO_EMAIL,
    $subject,
    $emailHtml,
    implode("\r\n", $headers)
);

if ($sent) {
    // Guardar en archivo JSON
    saveSubmission('briefs', [
        'briefId' => $briefId,
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'company' => $company,
        'projectType' => $projectType,
        'projectTitle' => $projectTitle,
        'description' => $description,
        'objectives' => $objectives,
        'targetAudience' => $targetAudience,
        'budget' => $budget,
        'timeline' => $timeline,
        'deliverables' => $deliverables,
        'references' => $references,
        'additionalInfo' => $additionalInfo
    ]);
    sendResponse(true, 'Brief submitted successfully');
} else {
    error_log('Failed to send project brief email from: ' . $email);
    sendResponse(false, 'Failed to submit brief. Please try again later.', 500);
}
