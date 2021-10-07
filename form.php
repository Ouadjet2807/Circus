<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guest Book</title>
</head>
<body>
<form action="#" method="post">
<fieldset>
<legend>Add a comment</legend>
<label for="name">Name<br></label><input name="name" type="text" /></label>       <br />
<label for="email">email<br></label><input name="email" type="email" />            <br />
<label for="comment">comment<br></label><textarea name="comment"> </textarea>     <br />

<label for="submit"><input type="submit" name="button" id="button" value="Post Comment" />
</fieldset>
</form>
<?php
if(isset($_POST['name']) || isset($_POST['email'])|| isset($_POST['comment'])|| isset($_POST['number'])) {


   
$name = $_POST['name'];  
$email = $_POST['email'];  
$comment = $_POST['comment'];

	$myfile = fopen("comments.html", "a") or die("Make sure that comments.html is created in the same directory of this file");
	$writeInFile = "<i><b>  Name: &nbsp;</b>".$_POST["name"]."<br><i>";
	$writeInFile3 = "<b><i>  Email: &nbsp;</b>".$_POST["email"]."<br> <i>";
	$writeInFile2 = "<b><i>  Comment: &nbsp;</i></b>".$_POST["comment"]."<br><hr>";
	fwrite($myfile, $writeInFile);
	fwrite($myfile, $writeInFile3);
	fwrite($myfile, $writeInFile2);
	fclose($myfile);
}




require "comments.html";
?>
</body>
</html>