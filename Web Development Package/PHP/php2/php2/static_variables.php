<html xmlns = "http://www.w3.org/1999/xhtml">
<!-- An example to illustrate a function in a php document -->
  <head> <title> global scope.php </title>
  </head>
  <body>
    <p>
		<?php
		/*every time function is called, it will
		print the current value of $a and
		increment it*/
		function test()
		{
		//$a is initialized only first time this
		//function is called
		static $a = 0;
		echo "$a <br />";
		$a++;
		}
		
		//invoking the test method
		test();
		test();
		test();
		?>
		
	</p>
  </body>
</html>