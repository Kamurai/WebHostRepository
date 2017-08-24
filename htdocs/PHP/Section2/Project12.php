<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
</head>
<font color="white">
<body id="idBody">
<?php
	include 'Path.php';
	
	$title = "Sacred Offerings";
	$centerHeader = "Sacred Offerings";
	$centerContent = "
							This section is dedicated to the board game project \"Sacred Offerings\".<br/>
							Being a god is hard, you have to eat, but
							don't want to fall out favor with the people more than the other deities.
							Draw people to worship you, but be discerning about who is sacrificed.
						</br>
						</br>
							You can download the Tabletop Simulator mod here:
							<a href='http://steamcommunity.com/sharedfiles/filedetails/?id=652957007'>Steam Workshop</a>
						</br>
						</br>
								Sacred Offerings Ruleset v0.1<br/>
						<br/>
							Setup:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Select a board for the number of players (from 2 to 6):<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								The two player board is a square with two alters.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								The three player board is a triangle with an alter at its center.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								The four player board is a square with an alter at its center.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								The five player board is a pentagon with an alter at its center.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								The six player board is a hexagon with an alter at its center.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Set tokens on the board in the following manner for each player corner:<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									2 players: <br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										1 4-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										3 3-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										5 2-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										7 1-point tokens<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									3 players:<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										8 1-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										6 2-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										4 3-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										2 4-point tokens<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									4 players:<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										7 1-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										5 2-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										3 3-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										1 4-point tokens<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									5 players:<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										8 1-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										6 2-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										4 3-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										2 4-point tokens<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									6 players:<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										8 1-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										6 2-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										4 3-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										2 4-point tokens<br/>
							<br/>	
							Determine First player:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Decide amongst yourself through any method of yelling, rolling dice, pulling straws (not hair), etc.<br/>
							<br/>
							Player turn:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Each turn a player must move a character on the board.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Tokens move in one of two ways:<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									One space in any direction. (Like a King in chess)<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Able to jump multiple pieces. (Like a King in checkers)<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								That character must end closer to the alter than they began.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								If a player CAN sacrifice a character, they must.<br/>
							<br/>
							Scoring:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								A player get +1 points equal to the value of the character sacrificed.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								A player gets -1 point on a turn they did not sacrifice a character.<br/>
							<br/>
							End condition:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								No characters are left on the board.<br/>
							<br/>
							Victory condition:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								The player with the lower points wins!<br/>
					";
	$GDR = "";
	$winrar = "";

	$infoContent = "This is written with PHP.<br><br>
					Other versions of this page are here:<br>
					<a href=\"http://htkb.dyndns.org/Section2/Project12.html\">HTML</a><br>
					<a href=\"http://htkb.dyndns.org/Javascript/Section2/Project12.html\">HTML Javascript</a><br>
					<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project12.asp\">ASP Javascript</a><br>
					<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project12.aspx\">ASP.NET Javascript</a><br>
					<a href=\"http://htkb.dyndns.org/Section2/Project12.shtml\">Perl</a><br>
					<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project12.jsp\">JSP</a><br>
					<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project12.xhtml\">JSF</a><br>
					<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project12.cshtml\">ASP.NET Web App</a><br>
					<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project12.aspx\">ASP.NET Webform</a><br>
					<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project12\">ASP.NET MVC App</a><br>
					<a href=\"http://htkb.dyndns.org/SSI/Section2/Project12.html\">Apache SSI</a><br>
				";
	

	#Overall body
	include $style.'Layout.php';
?>
</body>
</font>
</html>