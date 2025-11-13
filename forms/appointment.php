<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "vanshika1202.vg@gmail.com";
  $subject = "New Appointment Request from Sense Care Website";

  $name = strip_tags($_POST["name"]);
  $email = strip_tags($_POST["email"]);
  $phone = strip_tags($_POST["phone"]);
  $date = strip_tags($_POST["date"]);
  $time = strip_tags($_POST["time"]);
  $doctor = strip_tags($_POST["doctor"]);
  $message = strip_tags($_POST["message"]);

  $body = "
  Name: $name\n
  Email: $email\n
  Phone: $phone\n
  Date: $date\n
  Time: $time\n
  Doctor/Department: $doctor\n
  Message:\n$message
  ";

  $headers = "From: $email\r\nReply-To: $email\r\n";

  if (mail($to, $subject, $body, $headers)) {
    echo "success";
  } else {
    echo "error";
  }
}
?>
