<?php

$return = array();
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $return['status'] = "error";
  $return['message'] = "Email inválido.";
}

if (strlen($name) < 1) {
  $return['status'] = "error";
  if (strlen($return['message']) > 0) $return['message'] .= " / ";
  $return['message'] = "Nome é necessário.";
}

if (empty($return)) {
  $domain = $_SERVER["DOMAIN_MR"];
  $apiKey = $_SERVER["APIKEY_MR"];

  $curl = curl_init("http://$domain/ccm/admin/api/version/2/&type=json");
   
  $postData = array(
      "function"  => "addSubscriber",
      "apiKey"    => $apiKey,
      "email"     => $email,
      "name"      => $nome,
      "groups"    => array(2)
  );
   
  $post = http_build_query($postData);
   
  curl_setopt($curl, CURLOPT_POST, true);
  curl_setopt($curl, CURLOPT_POSTFIELDS, $post);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
   
  $json = curl_exec($curl);
  $result = json_decode($json);
   
  if ($result->status == 0) {
    $api_message = strtolower($result->error);

    switch (true) {
      case (strpos($api_message, "se requiere un valor") !== false):
        $message = "Email é necessário.";
        break;
      case (strpos($api_message, "no es una direcci") !== false):
        $message = "Email inválido.";
        break;
      case (strpos($api_message, "el email ya existe") !== false):
        $message = "Email já inscrito.";
        break;
      default:
        $message = "Erro desconhecido";
    }

    $return['status'] = "error";
    $return['message'] = $message;
  } else {
    $return['status'] = "success";
    $return['message'] = "";
  }
}

echo json_encode($return);
