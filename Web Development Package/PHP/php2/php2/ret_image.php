<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns = "http://www.w3.org/1999/xhtml">
<!-- An example to illustrate reading directories in PHP -->
  <head> 
	<title>image of your choice</title>
	<link rel="stylesheet" type="text/css" href="form_proc.css" />
  </head>
  <body>
  <p>
  <?php
	//retrieve query-string-parameter-value for the parameter-name searchKeyword
	//store retrieved value in local variable $keyword
	$keyword = $_POST["searchKeyword"];
	
	//$flag is initially set to false and is changed to true, when a image matching the keyword is found
	$flag = false;
	
	//open the images directory and get the filehandle and store in local variable $dir
	$dir = opendir("images");
	
	//while there are files in the $dir directory, call the readdir function that returns the filenames within the $dir directory
	while($filename = readdir($dir))
	{
		//ignore the files by the name of . and ..
		//. refers to the current directory, and .. refers to the previous directory
		//files by these names ALWAYS exist in a directory
		//for this program, we don't need to process these filenames, so we ignore them through an if-stmt
		if (($filename != '.') && ($filename != '..')){
			//check if user-entered keyword is in the filename of the files in the images directory
			//the strpos function returns the position of the $keyword string, if it exists as part of the larger string $filename
			//so, when a match is found in the images directory, we set the $image variable to the filename
			if (!(strpos($filename,$keyword) === false)){
				$image = $filename;
				$flag = true; //flag is set to true  now, because image is found
			}
		}
	}
	//if flag is set to false at this point in the program, it implies that an image matching the keyword was not found
	//in the images directory. so, set $image variable to a default 'notfound.jpg' filename
	if($flag == false){
		$image="notfound.jpg";
	}
  ?>
  <!-- display   the image matching the keyword, which is stored in the $image variable on to the HTML page using the <img> tag -->
  <img src= "images/<? echo $image ?>" />
  </p>
  </body>
  </html>