<html xmlns = "http://www.w3.org/1999/xhtml">
<!-- An example to illustrate a function in a php document -->
  <head> <title> global scope.php </title>
  </head>
  <body>
    <p>
	
	<?php
	$sum_all = 0;
	
	//function returns the sum of all elements of an array
	function add_elements($list){
		//get access to global variable $sum_all
		//all references to $sum_all variable 
		//is referencing the global variable 
		//defined outside the function
		global $sum_all;
		$sum = 0;
		foreach ($list as $value){
			$sum = $sum + $value;
		}
		//adds sum of array to 
		//global sum maintained by variable sum_all
		$sum_all = $sum_all + $sum;
		return $sum;
	}
	echo $sum_all;
	
	$numbers1 = array(2, 4, 6, 8, 10);
	$numbers2 = array(1, 3, 5, 7, 9);
	
	//invoking the add function
	$answer1 = add_elements($numbers1);
	$answer2 = add_elements($numbers2);

    print "<b>Welcome to my home page <br /> <br /></b>";
	print "The first original array is<br />";
	foreach ($numbers1 as $num)
		print("$num <br />");
	print "The sum of elements of array is $answer1 <br />";
	print "The second original array is<br />";
	foreach ($numbers2 as $num)
		print("$num <br />");
	print "The sum of elements of array is $answer2 <br />";
	print "The value of ALL array elements is $sum_all <br />";
    ?>
    </p>
  </body>
</html>
