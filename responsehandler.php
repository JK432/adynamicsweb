<?php include('Crypto.php') ?>
<?php define('SECURE_ACCESS', true);
require_once "config.php"; ?>
<?php


function processEncResponse($encResponse)
{
    $workingKey = CCA_WORKING_KEY;		//Working Key should be provided here.			//This is the response sent by the CCAvenue Server
    $rcvdString = decrypt($encResponse, $workingKey);		//Crypto Decryption used as per the specified working key.
    $order_status = "";
    $decryptValues = explode('&', $rcvdString);
    $dataSize = sizeof($decryptValues);

    for ($i = 0; $i < $dataSize; $i++) {
        $information = explode('=', $decryptValues[$i]);
        if ($i == 3)
            $order_status = $information[1];
    }
    
    switch (strtolower($order_status)) {
        case 'success':
            return 'success';
        case 'aborted':
            return 'aborted';
        case 'failure':
            return 'failure';
        default:
            return 'illegal';
    }
}
?>