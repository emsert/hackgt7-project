<html xmlns = "http://www.w3.org/1999/xhtml">
<!-- An example to illustrate a function in a php document -->
  <head> <title> functions.php </title>
  </head>
  <body>
    <p>
	
	<?php
	
	
	
	//function returns the maximum of two numbers
	//$first and $second are called 'formal parameters'
	function max_abs($first, $second){
		$num = 4;
		$first = abs($first);
		$second = abs($second);
		if ($first >= $second){
			return $first;
		}
		else
		{
			return $second;
		}
	}
						
						
	$num1 = 500;
	$num2 = 200;
	
	//invoking the max_abs function
	//$num1 and $num2 are called 'actual parameters'
	$max_num = max_abs($num1, $num2);
    print "<b>Welcome to my home page <br /> <br />";
	print "Maximum of the numbers $num1 and $num2 is $max_num <br />";
    ?>
    </p>
  </body>
</html>
