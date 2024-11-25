<html>
<head>
<title> Non-Seamless-kit</title>
</head>
<body>
<center>

<?php include('Crypto.php')?>
<?php define('SECURE_ACCESS', true);
      require_once "config.php"; ?>
<?php 

	error_reporting(0);
	
	$merchant_data='';
	$working_key=CCA_WORKING_KEY;//Shared by CCAVENUES
	$access_code=CCA_ACCESS_CODE;//Shared by CCAVENUES


	$counter = 0;
	$total_items = count($_POST);

	foreach ($_POST as $key => $value) {
		$merchant_data .= $key . '=' . $value;
		if ($counter < $total_items - 1) {
			$merchant_data .= '&';
		}
		$counter++;
	}

	$encrypted_data=encrypt($merchant_data,$working_key); // Method for encrypting the data.

?>
<form method="post" name="redirect" action="https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction">
<?php
echo "<input type=hidden name=encRequest value=$encrypted_data>";
echo "<input type=hidden name=access_code value=$access_code>";
?>
</form>
</center>
<script language='javascript'>document.redirect.submit();</script>
</body>
</html>

