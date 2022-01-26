<?php
$titulo = $_POST['titulo'];
$mensaje = $_POST['mensaje'];

 ////////ENVÍO DE NOTIFICACIÓN/////////
$fcmUrl = 'https://fcm.googleapis.com/fcm/send';
$token = 'fgC2snCiS5aQ37OomKNMpw:APA91bHuoS24ny6xrSRYltQNrHm60mET2SiBkzBc6pr39MWgsT9E2x35gYoodw-K_zu0b-p42fqZccOK0_b_VtmE5gEA2Wpkd0O-TCTszXxhK0Jdl3rGu0ty7LlEi3vEJpqz1yhSw08k';
$apiKey = 'AAAAYVKkM18:APA91bFeokPiLa7EkcHhIEMdYMAv7RitkdvYojBYB_cXR4si8EsBulg3axeX474OXVyXbgqJR5pS4aFaYySfv1lehb-4ULqdTZxS6gvTEJI08-t8tmG1GMUqUdBktaldX3fOj7-SnBqC';
$notification = ['title' => $titulo, 'body' => $mensaje, 'icon' => 'myIcon', 'sound' => 'mySound'];
$extraNotificationData = ["message" => $notification, "moredata" => 'dd'];
$fcmNotification = [
        
'to' => '/topics/todos',
'notification' => $notification, 'data' => $extraNotificationData];
$headers = ['Authorization: key=' . $apiKey, 'Content-Type: application/json'];
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $fcmUrl);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fcmNotification));
$result = curl_exec($ch);
curl_close($ch);

header("Location: notificaciones.php");

//CONTACTO: Alejo
//+529934341808
?>




 