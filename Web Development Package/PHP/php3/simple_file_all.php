<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title></title>
</head>
<body>
<?php
//opening a file for reading 
$filevar = fopen("testdata.txt", "r") 
			or die ("Error - could not open file");

if(file_exists("testdata.txt")) 
	print("Ouput of file_exists during read operation: file exists <br />"); 
else 
	print ("Ouput of file_exists during write operation: file does not exist <br />");

//read contents of a file using fread. fread reads the specified number of characters as a string
$file_content_as_string = fread($filevar,filesize("testdata.txt"));

echo "<b>Output of fread function</b><br />";
echo $file_content_as_string;

//file function returns contents of file as an array
$file_content_as_array = file("testdata.txt");
echo "<br/><b>Output of file function</b><br />";
$i = 1;
foreach ($file_content_as_array as $line){
	print("<b>Line $i:</b> $line <br />");
	$i++;
}	
fclose($filevar);

//opening a file for writing
print("<br/>Starting on the write operations<br/>");
$filevar2 = fopen("/afs/umbc.edu/users/s/a/sampath/pub/php-files/testdata_write.txt", "w") 
or die ("Error - could not open file");

	//lock file before writing
	if(flock($filevar2,LOCK_EX))
	{
		print("<p>Lock successful</p>");
	}
	else{
		print("<p>Lock unsuccessful</p>");
	}

if(file_exists("/afs/umbc.edu/users/s/a/sampath/pub/php-files/testdata_write.txt")) 
	print("file exists<br />"); 
else 
	print ("file does not exist<br />");

	$bytes_written = fwrite($filevar2, "the content 
		you want to write to the file should be 
		in these double quotes");

		//unlock file after finishing write operation
	flock($filevar2, LOCK_UN);
	
	//close the file
	fclose($filevar2);


?>
</body>
</html>
