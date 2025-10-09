<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

require_once 'config.php';

try {
    $conn = getDBConnection();
    
    $sql = "SELECT * FROM Menu WHERE is_visible = 1 ORDER BY 'order' DESC";
    $result = $conn->query($sql);
    
    $data = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }
    
    echo json_encode([
        "success" => true,
        "data" => $data,
        "count" => count($data)
    ], JSON_UNESCAPED_UNICODE);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);
} finally {
    if (isset($conn)) {
        $conn->close();
    }
}
?>