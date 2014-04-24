<?php include_once('partials/header.html') ?>

<?php 
	$url = "http://". $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
	$shortUrl = substr($url, strpos($url, "?") + 1);    
?>

<?php include_once('projects/'. $shortUrl .'.html') ?>

<?php include_once('partials/footer.html') ?>