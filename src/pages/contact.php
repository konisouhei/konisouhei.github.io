<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. あなたのメールアドレスに書き換えてください
    $to = "your_email@example.com"; 
    
    // 2. メールの件名
    $subject = "【公式サイト】お問い合わせがありました";
    
    // 3. フォームから送られてきたデータの受け取りと安全対策
    $name    = htmlspecialchars($_POST['name'], ENT_QUOTES, "UTF-8");
    $email   = htmlspecialchars($_POST['email'], ENT_QUOTES, "UTF-8");
    $tel     = htmlspecialchars($_POST['tel'], ENT_QUOTES, "UTF-8");
    $message = htmlspecialchars($_POST['message'], ENT_QUOTES, "UTF-8");
    
    // 4. メールの本文を組み立てる
    $body = "ホームページからお問い合わせがありました。\n\n";
    $body .= "【お名前】\n$name\n\n";
    $body .= "【メールアドレス】\n$email\n\n";
    $body .= "【お電話番号】\n$tel\n\n";
    $body .= "【お問い合わせ内容】\n$message\n";
    
    // 5. メールの送信元（文字化け対策を含むヘッダー設定）
    $headers = "From: " . mb_encode_mimeheader("公式サイトフォーム") . " <$to>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // 6. 文字コードをUTF-8に設定してメールを送信
    mb_language("Japanese");
    mb_internal_encoding("UTF-8");
    
    if (mb_send_mail($to, $subject, $body, $headers)) {
        // 送信成功時：完了画面を表示
        echo "<div style='text-align:center; margin-top:50px;'>";
        echo "<h2>お問い合わせありがとうございました。</h2>";
        echo "<p>内容を確認の上、担当者よりご連絡いたします。</p>";
        echo "<p><a href='javascript:history.back()'>戻る</a></p>";
        echo "</div>";
    } else {
        // 送信失敗時
        echo "メールの送信に失敗しました。お手数ですが、時間をおいて再度お試しいただくか、お電話にてご連絡ください。";
    }
} else {
    // URL直接アクセスなどの不正アクセス対策
    echo "不正なアクセスです。";
}
?>
