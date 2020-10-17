<html>
<?php

	$day = date("l");
  $test = "NOTE: This page changes its background color depending on the day of the week!";

	if ($day == "Monday")
  echo "<body style='background-color:green'>";
		//echo = "Today is Monday";
	else if($day == "Tuesday")
  echo "<body style='background-color:lime'>";
		//echo = "Today is Tuesday";
  else if($day == "Wednesday")
    echo "<body style='background-color:pink'>";
    //echo "Today is Wednesday";
  else if($day == "Thursday")
  echo "<body style='background-color:yellow'>";
  	//echo = "Today is Thursday";
  else if($day == "Friday")
  echo "<body style='background-color:navy'>";
    //echo = "Today is Friday";
  else if($day == "Saturday")
  echo "<body style='background-color:blue'>";
    //echo = "Today is Saturday";
  else
  echo "<body style='background-color:teal'>";
    //echo = "Today is Sunday";
?>


<head>
<title>  EnesSert_BG_Color </title>

<body>
  <h3>
  The day that has the special background color seen on the screen is...
  <h3>
  <h1>
		<?php echo date("l") ?>
	</h1>

	<p>
		<?php echo $test ?>
	</p>
	</body>
</html>
