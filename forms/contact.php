<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $subject = htmlspecialchars($_POST['subject']);
  $message = htmlspecialchars($_POST['message']);

  $to = "vanshika1202.vg@gmail.com"; // your email
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  $body = "New Contact Form Submission:\n\n";
  $body .= "Name: $name\n";
  $body .= "Email: $email\n";
  $body .= "Subject: $subject\n";
  $body .= "Message:\n$message\n";

  if (mail($to, "New Enquiry: $subject", $body, $headers)) {
    echo "success";
  } else {
    echo "error";
  }
} else {
  echo "Invalid Request";
}
?>
