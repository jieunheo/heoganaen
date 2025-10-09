<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// define('DB_HOST', '112.175.184.61');
define('DB_HOST', 'localhost');
define('DB_USER', 'heoganaen');
define('DB_PASS', 'silver1204!');
define('DB_NAME', 'heoganaen');
define('DB_CHARSET', 'utf8');

function getDBConnection() {
    // 상수 확인
    // echo "DB_HOST: " . DB_HOST . "<br>";
    // echo "DB_USER: " . DB_USER . "<br>";
    // echo "DB_NAME: " . DB_NAME . "<br>";

    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    if ($conn->connect_error) {
        // 구체적인 에러 메시지 출력
        $error_msg = "Connection failed: " . $conn->connect_error;
        $error_code = "Error code: " . $conn->connect_errno;

        http_response_code(500);
        die(json_encode([
            "error" => "Database connection failed",
            "message" => $error_msg,
            "code" => $error_code
        ], JSON_UNESCAPED_UNICODE));
    }
    
    $conn->set_charset(DB_CHARSET);
    // echo "연결 성공!<br>";
    return $conn;
}
?>