<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

ini_set('display_errors', 1);

require_once 'config.php';

try {
    $conn = getDBConnection();

    $sql = "SELECT * FROM Company ORDER BY 'order'";
    $result = $conn->query($sql);
    
    $infos = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $infos[$row['type']] = $row;
        }
    }
    
    echo json_encode([
        "success" => true,
        "infos" => $infos,
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