<html
<head>
  <title> Response </title>

  <link rel="stlesheet" type = "text/css" href="form_proc.css"/>






<?php
$moviename = $_POST ["movie_name"];
$rating = $_POST ["rating"];

?>
Thank you for your rating!
<?php echo $moviename ?>.

Your rating was: "<?php echo $rating?>" and is extremely useful to us. <br/>

</p>
</body>
</html>
