<?php
/**
 * Configuración de los formularios de contacto
 * Sklair Films - sklairfilms.com
 */

// Email destino (donde recibes los mensajes)
define('CONTACT_TO_EMAIL', 'unmedia@me.com');

// Email remitente (el "From" del correo)
define('CONTACT_FROM_EMAIL', 'steve@sklairfilms.com');
define('CONTACT_FROM_NAME', 'Sklair Films Website');

// Configuración anti-spam
define('HONEYPOT_FIELD', 'website'); // Campo oculto que los bots rellenan

// Configuración del panel de admin
define('ADMIN_PASSWORD', 'steve@22');

// Directorio donde se guardan los formularios
define('DATA_DIR', __DIR__ . '/../../data');

// Headers de seguridad
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// Solo permitir POST
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    http_response_code(204);
    exit;
}

/**
 * Función para enviar respuesta JSON
 */
function sendResponse($success, $message, $code = 200) {
    http_response_code($code);
    echo json_encode([
        'success' => $success,
        'message' => $message
    ]);
    exit;
}

/**
 * Función para validar email
 */
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Función para sanitizar texto
 */
function sanitizeInput($input) {
    return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
}

/**
 * Función para verificar honeypot (anti-spam)
 */
function checkHoneypot($data) {
    // Si el campo honeypot tiene contenido, es un bot
    if (!empty($data[HONEYPOT_FIELD])) {
        return false;
    }
    return true;
}

/**
 * Función para guardar formulario en archivo JSON
 */
function saveSubmission($type, $data) {
    // Crear directorio si no existe
    if (!is_dir(DATA_DIR)) {
        mkdir(DATA_DIR, 0755, true);
    }
    
    $filename = DATA_DIR . '/' . $type . '.json';
    
    // Leer datos existentes
    $submissions = [];
    if (file_exists($filename)) {
        $content = file_get_contents($filename);
        $submissions = json_decode($content, true) ?: [];
    }
    
    // Añadir nuevo envío con timestamp e ID
    $submission = [
        'id' => uniqid($type . '_'),
        'timestamp' => date('Y-m-d H:i:s'),
        'data' => $data
    ];
    
    array_unshift($submissions, $submission); // Añadir al principio
    
    // Guardar
    file_put_contents($filename, json_encode($submissions, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    
    return $submission['id'];
}
