<?php

$return = array();
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	$return['status'] = "error";
	$message = ($_POST['lang'] == 'pt') ? $return['message'] = "Email inválido." : "Invalid Email";
}

if (strlen($name) < 1) {
	$return['status'] = "error";
	if (strlen($return['message']) > 0) $return['message'] .= " / ";
	$message = ($_POST['lang'] == 'pt') ? $return['message'] = "Nome é necessário." : "Name is required";
}

if (empty($return)) {
	$domain = 'agilebrazil.ip-zone.com';
	$apiKey = $_SERVER["APIKEY_MR"];

	$curl = curl_init("http://$domain/ccm/admin/api/version/2/&type=json");

	$postData = array(
		"function" => "addSubscriber",
		"apiKey" => $apiKey,
		"email" => $email,
		"name" => $nome,
		"groups" => array(11)
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
				$message = ($_POST['lang'] == 'pt') ? "Email é necessário." : "Email is required.";
				break;
			case (strpos($api_message, "no es una direcci") !== false):
				$message = ($_POST['lang'] == 'pt') ? "Email inválido." : $message = "Invalid Email.";
				break;
			case (strpos($api_message, "el email ya existe") !== false):
				$message = ($_POST['lang'] == 'pt') ? "Email já inscrito." : $message = "Email already subscribed.";
				break;
			default:
				$message = ($_POST['lang'] == 'pt') ? "Erro desconhecido" : $message = "Unknown error.";
		}

		$return['status'] = "error";
		$return['message'] = $message;
	} else {
		$return['status'] = "success";
		$return['message'] = "";
	}
}

echo json_encode($return);
