<?php
/**
 * Form Submission Handler
 * Sends emails to unmedia@me.com and logs submissions
 */

// Allow CORS for local development
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Configuration
$recipient_email = 'unmedia@me.com';
$log_file = __DIR__ . '/submissions.log';

// Detect if running on localhost (for testing without SMTP)
$is_localhost = in_array($_SERVER['SERVER_NAME'], ['localhost', '127.0.0.1']) || 
                strpos($_SERVER['SERVER_NAME'], '.local') !== false;

// Get form data
$form_type = isset($_POST['form_type']) ? $_POST['form_type'] : 'contact';
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Additional fields for project brief
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$company = isset($_POST['company']) ? trim($_POST['company']) : '';
$projectType = isset($_POST['projectType']) ? trim($_POST['projectType']) : '';
$projectTitle = isset($_POST['projectTitle']) ? trim($_POST['projectTitle']) : '';
$description = isset($_POST['description']) ? trim($_POST['description']) : '';
$references = isset($_POST['references']) ? trim($_POST['references']) : '';
$services = isset($_POST['services']) ? $_POST['services'] : [];
$budget = isset($_POST['budget']) ? trim($_POST['budget']) : '';
$timeline = isset($_POST['timeline']) ? trim($_POST['timeline']) : '';
$deadline = isset($_POST['deadline']) ? trim($_POST['deadline']) : '';
$additional = isset($_POST['additional']) ? trim($_POST['additional']) : '';

// Validate required fields
if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name and email are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Build email content
$timestamp = date('Y-m-d H:i:s');

if ($form_type === 'brief') {
    $subject = "New Project Brief: " . ($projectTitle ?: 'No Title');
    $services_list = is_array($services) ? implode(', ', $services) : $services;
    
    $email_body = "
===========================================
NEW PROJECT BRIEF SUBMISSION
===========================================

CONTACT INFORMATION
-------------------
Name: $name
Email: $email
Phone: $phone
Company: $company

PROJECT DETAILS
---------------
Project Type: $projectType
Project Title: $projectTitle

Description:
$description

References/Style:
$references

SERVICES REQUIRED
-----------------
$services_list

BUDGET & TIMELINE
-----------------
Budget Range: $budget
Timeline: $timeline
Deadline: $deadline

ADDITIONAL NOTES
----------------
$additional

-------------------------------------------
Submitted: $timestamp
Form: Project Brief
===========================================
";
} else {
    $subject = "Quick Contact from $name";
    $email_body = "
===========================================
QUICK CONTACT MESSAGE
===========================================

From: $name
Email: $email

Message:
$message

-------------------------------------------
Submitted: $timestamp
Form: Quick Contact
===========================================
";
}

// Email headers
$headers = "From: noreply@stevesklair.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email (skip on localhost, just log)
$mail_sent = false;
if ($is_localhost) {
    // On localhost, save email to file instead of sending
    $email_file = __DIR__ . '/emails_local.log';
    $email_log = "\n" . str_repeat('=', 60) . "\n";
    $email_log .= "TO: $recipient_email\n";
    $email_log .= "SUBJECT: $subject\n";
    $email_log .= "DATE: $timestamp\n";
    $email_log .= str_repeat('-', 60) . "\n";
    $email_log .= $email_body;
    $email_log .= "\n" . str_repeat('=', 60) . "\n";
    file_put_contents($email_file, $email_log, FILE_APPEND | LOCK_EX);
    $mail_sent = true; // Consider it "sent" for localhost testing
} else {
    // On production server, send actual email
    $mail_sent = @mail($recipient_email, $subject, $email_body, $headers);
}

// Log submission
$log_entry = [
    'timestamp' => $timestamp,
    'form_type' => $form_type,
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'company' => $company,
    'project_type' => $projectType,
    'project_title' => $projectTitle,
    'message' => $message ?: $description,
    'budget' => $budget,
    'timeline' => $timeline,
    'mail_sent' => $mail_sent
];

$log_line = date('Y-m-d H:i:s') . ' | ' . json_encode($log_entry, JSON_UNESCAPED_UNICODE) . PHP_EOL;
file_put_contents($log_file, $log_line, FILE_APPEND | LOCK_EX);

// Response
if ($mail_sent) {
    echo json_encode([
        'success' => true, 
        'message' => 'Form submitted successfully'
    ]);
} else {
    // Even if mail fails, we logged it
    echo json_encode([
        'success' => true, 
        'message' => 'Form received and logged'
    ]);
}
?>
