<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

ini_set('display_errors', 1);

require_once 'config.php';

try {
    $conn = getDBConnection();

    $sql = "SELECT * FROM Noti WHERE is_view = 1 ORDER BY id DESC";
    $result = $conn->query($sql);
    
    $notis = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $notis[] = $row;
        }
    }
    
    echo json_encode([
        "success" => true,
        "notis" => $notis,
        "count" => count($notis)
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