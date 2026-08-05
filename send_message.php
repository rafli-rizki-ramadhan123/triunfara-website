<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include "koneksi.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $message = mysqli_real_escape_string($conn, $_POST['message']);

    $sql = "INSERT INTO contact_messages (name,email,message)
            VALUES ('$name','$email','$message')";

    if (mysqli_query($conn, $sql)) {

        echo "<script>
        alert('Message sent successfully!');
        window.location='contact.php';
        </script>";

    } else {

        die("Database Error: " . mysqli_error($conn));

    }

}
?>