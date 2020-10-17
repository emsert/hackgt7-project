<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Showing several write functions and flock</title>
</head>
<body>
<?php



?>

<h3>Writing user's names to file </h3>

<?php
	//get form field value into the $content variable
	$content = $_POST["username"];
	echo "Name is: $content<br/>";

	//check that $content is not empty and only then write to file
	if(!(empty($content))){
		//file_put_contents returns false if the write failed
		$bytes_written = file_put_contents("/afs/umbc.edu/users/z/z/zzaidi1/pub/php-files/names2.txt", $content, FILE_APPEND | LOCK_EX);

		if($bytes_written == false){
			print("<p>Writing to file failed.</p>");
		}
		print("<p>Your name \"$content\" was written to file</p>");
	}
	else{
	?>
	
	<p>
		You didn't enter a name. Enter a name on 
		<a href="write_to_file.html">previous page</a> so we can write it to file!
	</p>
	
	<?php

	} //close of else branch
	
	?>
</body>
</html>
