<html>
<?php
		$day = date("l");
	$bgcolors= array("Monday" => "teal", "Tuesday"=>"blue", "Wednesday"=>"navy","Thursday"=> "yellow","Friday"=> "pink", "Saturday" => "lime", "Sunday"=> "green");

?>



<head>

<style>
body {background-color: <?php print $bgcolor[$day];?>}
</style>
<title>  EnesSert_BG_Color </title>
</head>
<body>
  <h3>
  The day that has the special background color seen on the screen is...
  <h3>

	</body>
</html>
