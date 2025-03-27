<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "your-email@example.com";  // ここを自分のメールアドレスに変更
    $subject = "ポートフォリオからのお問い合わせ";
    $body = "名前: $name\nメール: $email\nメッセージ:\n$message";

    if (mail($to, $subject, $body)) {
        echo "お問い合わせが送信されました！";
    } else {
        echo "送信に失敗しました。";
    }
}
?>
