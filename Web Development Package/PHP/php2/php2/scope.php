<html xmlns = "http://www.w3.org/1999/xhtml">
<!-- An example to illustrate a function in a php document -->
  <head> <title> scope.php </title>
  </head>
  <body>
    <p>
	
	<?php
	#this is a global $sum variable
	$sum = 10;	
	
	//function returns the sum of all elements of an array
	function add_elements($list){
		//the $sum variable defined here is local to the function
		$sum = 0;
		foreach ($list as $value){
			$sum = $sum + $value;
		}
		return $sum;
	}
	

	$numbers = array(2, 4, 6, 8, 10);
	
	//invoking the add function
	$answer = add_elements($numbers);
	?>
	
    <b>Welcome to my home page</b> <br /> <br />
	The original array is<br />
	
	<?php 
	foreach ($numbers as $num)
		print("$num <br />");
	?>
	
	The sum of elements of array is <?php echo $answer ?> <br />
	The value of sum is still <?php echo $sum ?>
    
    </p>
  </body>
</html>
