<?php
/**
 * Admin Panel API - Lista de formularios enviados
 * Sklair Films - sklairfilms.com
 * 
 * Protegido con contraseña
 */

require_once __DIR__ . '/config.php';

// Permitir GET y POST
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    http_response_code(204);
    exit;
}

// Verificar autenticación (usando parámetro 'key' para compatibilidad con nginx)
$password = '';

// Intentar obtener contraseña de varias formas
if (isset($_GET['key'])) {
    $password = $_GET['key'];
} elseif (isset($_POST['key'])) {
    $password = $_POST['key'];
} else {
    // Intentar desde JSON body
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    if ($data && isset($data['key'])) {
        $password = $data['key'];
    }
}

if (empty($password)) {
    sendResponse(false, 'Authorization required', 401);
}

if ($password !== ADMIN_PASSWORD) {
    sendResponse(false, 'Invalid password', 401);
}

// Obtener acción
$action = isset($_GET['action']) ? $_GET['action'] : 'list';

switch ($action) {
    case 'list':
        // Listar todos los formularios
        $contacts = [];
        $briefs = [];
        
        $contactsFile = DATA_DIR . '/contacts.json';
        $briefsFile = DATA_DIR . '/briefs.json';
        
        if (file_exists($contactsFile)) {
            $contacts = json_decode(file_get_contents($contactsFile), true) ?: [];
        }
        
        if (file_exists($briefsFile)) {
            $briefs = json_decode(file_get_contents($briefsFile), true) ?: [];
        }
        
        echo json_encode([
            'success' => true,
            'contacts' => $contacts,
            'briefs' => $briefs,
            'stats' => [
                'totalContacts' => count($contacts),
                'totalBriefs' => count($briefs)
            ]
        ]);
        break;
        
    case 'delete':
        // Eliminar un formulario específico
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            sendResponse(false, 'POST method required', 405);
        }
        
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        
        if (!$data || !isset($data['id']) || !isset($data['type'])) {
            sendResponse(false, 'Missing id or type', 400);
        }
        
        $type = $data['type'] === 'contact' ? 'contacts' : 'briefs';
        $filename = DATA_DIR . '/' . $type . '.json';
        
        if (!file_exists($filename)) {
            sendResponse(false, 'File not found', 404);
        }
        
        $submissions = json_decode(file_get_contents($filename), true) ?: [];
        $found = false;
        
        foreach ($submissions as $key => $submission) {
            if ($submission['id'] === $data['id']) {
                unset($submissions[$key]);
                $found = true;
                break;
            }
        }
        
        if (!$found) {
            sendResponse(false, 'Submission not found', 404);
        }
        
        // Reindexar array y guardar
        $submissions = array_values($submissions);
        file_put_contents($filename, json_encode($submissions, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        
        sendResponse(true, 'Submission deleted');
        break;
        
    default:
        sendResponse(false, 'Invalid action', 400);
}
