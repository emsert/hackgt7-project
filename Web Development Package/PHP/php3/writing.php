<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Showing several write functions and flock</title>
</head>
<body>
<?php

//opening a file for writing
$filevar2 = fopen("/afs/umbc.edu/users/z/z/zzaidi1/pub/php-files/names.txt", "a+") or die ("Error - could not open file");
if(!(file_exists("/afs/umbc.edu/users/z/z/zzaidi1/pub/php-files/names.txt"))) 
	print ("The file names.txt does not exist");
?>

<h3>Writing user's names to file </h3>

<?php
	//lock file before writing
	if(flock($filevar2,LOCK_EX))
	{
		print("<p>Lock successful</p>");
	}
	else{
		print("<p>Lock unsuccessful</p>");
	}
	//get form field value into the $content variable
	$content = $_POST["username"];
	echo "Name is: $content<br/>";

	//check that $content is not empty and only then write to file
	if(!(empty($content))){
		//fwrite returns false if the write failed
		$bytes_written = fwrite($filevar2, $content);
		//add a newline at the end so each name appears on a new line in the file
		fwrite($filevar2, "\n");

		if($bytes_written == false){
			print("<p>Writing to file failed.</p>");
		}
		//unlock file after finishing write operation
		flock($filevar2, LOCK_UN);
	
		//close the file
		fclose($filevar2);
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
