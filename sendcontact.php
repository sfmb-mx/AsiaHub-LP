<?php

// Define some constants
define( "RECIPIENT_NAME", "AsiaHub Customer Service" ); //UPDATE THIS TO YOUR NAME
define( "RECIPIENT_EMAIL", "contato@asiahub.hk" );      //UPDATE THIS TO YOUR EMAIL ID
define( "EMAIL_SUBJECT", "Website Visitor Request" );   //UPDATE THIS TO YOUR SUBJECT

// Read the form values
$success = false;
$senderName = isset( $_POST['idstore'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['idstore'] ) : "";
$senderEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";
/* $original_message = isset( $_POST['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message'] ) : ""; */

if(isset($_COOKIE['mymsg'])) {
    $original_message = $_COOKIE['mymsg'];
}

$message = 'Store ID: '.$senderName.'<br/>Email: '.$senderEmail.'<br/>URL: '.$original_message;

// If all values exist, send the email
if ( $senderName && $senderEmail && $message ) {
    $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
    $headers = "From: " . $senderName . " <" . $senderEmail . ">\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-Type: text/HTML; charset=ISO-8859-1\n";
    $success = mail( $recipient, EMAIL_SUBJECT, $message, $headers );
}

if ( $success )
{
?>
    <script>
     window.location='thanks.html';
    </script>
<?php
}
else
{
    echo "<h1>There was a problem sending your message. Please try again.</h1>";
}
?>
