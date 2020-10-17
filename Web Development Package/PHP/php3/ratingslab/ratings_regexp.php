<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Your rating and the average rating</title>
	<link rel="stylesheet" type="text/css" href="form_proc.css" />
</head>
<?php
	$curr_rating = $_POST["rating"];
	$movie_name = $_POST["movie_name"];
	$user_name = $_POST["user_name"];
		
			
		if(preg_match("/^[a-zA-Z]+$/", $user_name)){
			echo "Valid User Name <br />";
		}
		else{
			echo "Invalid User Name <br />";
		}


?>
<body bgcolor="orange">
<h1>Your rating</h1>
<p> Your rating for the movie <?php print $movie_name ?> is <?php print $curr_rating ?></p>



</body>
</html>
