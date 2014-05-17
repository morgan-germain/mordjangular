<?php
$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$content = $data->content;

$dest = "morgan.germain@gmail.com, jfcecilio@gmail.com, alfonsedroguer@hotmail.com, toxicazsid@gmail.com";
$subject = "Krearts - contact form";
$header = "From: $email\r\n";
$header.= "Reply-to: $email\r\n";
$result = mail($dest, $subject, $content, $header);
?>