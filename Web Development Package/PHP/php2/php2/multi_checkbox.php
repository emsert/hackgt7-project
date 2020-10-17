<html><head><title>Multi checkbox</title></head>
<body>
<p>
My hobbies are:  <br />
<?php

	$hobbies_list = $_POST['hobbies'];
	foreach ($hobbies_list as $hobby){
		echo "$hobby <br />";
	}
?>
</p>
</body>
</html>