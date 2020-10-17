<html>
<head>
	<title>Your rating and the average rating for the movie Madagascar</title>
	<link rel="stylesheet" type="text/css" href="form_proc.css" />
</head>
<?php
$curr_rating = $_POST["rating"];

//opening a file for read and append with a+ file mode
$filevar = fopen("/afs/umbc.edu/users/z/z/zzaidi1/pub/php-files/ratings.txt" , "a+") 
			or die ("Error - could not open file");
			
//writing current rating to the screen along with a new line character. so each user's rating will be written to a new line
fwrite($filevar, "$curr_rating\n");

//reading the contents of the file into an array $file_content
$file_content = file("/afs/umbc.edu/users/z/z/zzaidi1/pub/php-files/ratings.txt");
//initializing variables
$curr_sum = 0; $count=0; $average = 0;

//reading each line of file and computing the average
foreach ($file_content as $line){
	$curr_sum = $curr_sum + $line;
	$count++;
}
$average = $curr_sum/$count;

?>

<body>
<h1>Your rating</h1>
<p> 
	Your rating for the movie Madagascar is <?php print $curr_rating?>
</p>
<p>
	The average rating for the movie is  <?php printf("%2.2f",$average) ?> </p>
	<p><a href="ratings_sol2.html"> Go back and vote again </a></p>



</body>
</html>
