<?php
	include './Layout.php';
	include Path($Level).'DataMethod.php';
	
    $Page = 3;
    $Level = 2;
    $Section = 1;
    #Overall body
	WriteLayout($Page, $Level, $Section);
    
?>