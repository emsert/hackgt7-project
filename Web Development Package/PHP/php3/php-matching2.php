

<html xmlns = "http://www.w3.org/1999/xhtml">
<!-- An example to illustrate form parameters retrieval -->
  <head> 
	<title>response to customer satisfaction survey</title>
	<link rel="stylesheet" type="text/css" href="form_proc.css" />

  </head>
  <body>
    <p>
	
	<?php
		//retrieve values of form fields entered by the user
		//the form field values are sent as a query string to the PHP page
		//the parameter-name in the query string is the name of the form field
		//the parameter-value is the user-entered value
		//all the values are stored by PHP in the $_POST array
		//the value can be accessed by indexing the $_POST array using the query-string parameter-name
		
		$customerName = $_POST["custName"];
		$phoneNumber = $_POST["dayTimeNumber"];
		$comments = $_POST["commentsBox"];
		
		
		if(preg_match("/^\d*$/", $phoneNumber))
		{
?>		
			Thank you for the feedack,
			<strong><? echo $customerName ?></strong>. 
			Your comment 
			<strong> "<?echo $comments ?>" </strong> 
			is extremely useful to us. <br />
				
			We will
			contact you at <strong> <? echo $phoneNumber ?> </strong> 
			if we need further information.
	
		<?php 
		}
		else{
			echo "Invalid phone number <br />";
		?>
			Please <a href="php_matching2.html">go back</a> and re-enter your phone number.

		<?php
		}
			
		?>
	
		</p>
	</body>
</html>