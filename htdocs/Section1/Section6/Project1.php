<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
<!-- saved from url=(0023)./ -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"></head><body bgcolor="#000000" link="#C0C0C0" vlink="#808080" alink="#FF0000">
 
<font color="white">

<?php
	include 'Path.php';
	include $path.'DataMethod.php';
	
	$title = "Oracle Programming";
	$centerHeader = "<u>Oracle Programming</u>";
	$centerContent = "
						<p align='left'>
							This section is dedicated to Oracle based programming.
						</p>
						<p align='left'>
							<table>
								<tr>
									<td>
										Index
									</td>
									<td>
										Color
									</td>
								</tr>
								<tr>
									<td>".
										OracleMethod('1','0')
									."</td>
									<td>".
										OracleMethod('Red','1')
									."</td>
								</tr>
								<tr>
									<td>".
										OracleMethod('2','0')
									."</td>
									<td>".
										OracleMethod('Orange','1')
									."</td>
								</tr>
								<tr>
									<td>".
										OracleMethod('3','0')
									."</td>
									<td>".
										OracleMethod('Yellow','1')
									."</td>
								</tr>
								<tr>
									<td>".
										OracleMethod('4','0')
									."</td>
									<td>".
										OracleMethod('Green','1')
									."</td>
								</tr>
								<tr>
									<td>".
										OracleMethod('5','0')
									."</td>
									<td>".
										OracleMethod('Blue','1')
									."</td>
								</tr>
								<tr>
									<td>".
										OracleMethod('6','0')
									."</td>
									<td>".
										OracleMethod('Indigo','1')
									."</td>
								</tr>
								<tr>
									<td>".
										OracleMethod('7','0')
									."</td>
									<td>".
										OracleMethod('Violet','1')
									."</td>
								</tr>
							</table>
						</p>
					";
	$GDR = "";
	$winrar = "";

	
	#echo OracleMethod('1','0');
	#echo OracleMethod('Red','1');
	#echo $centerContent;
	#Overall body
	include $style.'Layout.php';
?>

</font></body></html>