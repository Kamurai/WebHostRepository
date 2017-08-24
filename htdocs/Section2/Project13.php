<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
<!-- saved from url=(0023)./ -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"></head><body bgcolor="#000000" link="#C0C0C0" vlink="#808080" alink="#FF0000">
 
<font color="white">

<?php
	include 'Path.php';
	
	$title = "The Way";
	$centerHeader = "<u>The Way</u>";
	$centerContent = "
						<p align='left'>
							This section is dedicated to the card game project 'The Way'.<br/>
							You seek to find enlightment by contemplating the elements.
							Escape the binds of the world and the board to reach enlightment and win.
						</p>
						<p align='left'>
							You can download the Tabletop Simulator mod here:
							<a href='http://steamcommunity.com/sharedfiles/filedetails/?id=652925835'>Steam Workshop</a>
						</p>
						<p align='left'>
							<u>
								The Way Ruleset v0.1<br/>
							</u>
							<br/>
							Setup:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Board:<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Place the board on the table.  Place one player piece for each player in the center of the board.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Deck:<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Shuffle the card deck and deal 4 cards to each player.<br/>									
							<br/>
							Symbols:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								There are 4 basic symbols that represent directions on the board.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Air moves a player piece towards the yellow gate.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Earth moves a player piece towards the brown gate.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Fire moves a player piece towards the red gate.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Water moves a player piece towards the blue gate.<br/>
							<br/>
							Play:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								On each player's turn, they may do one of the following things:<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									1)	Draw a card.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									2)	Play a card.<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										a)	This can affect your piece.<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										b)	This can affect pieces belonging to other players.<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										c)	This cannot result in a player exiting the board through another player's side of the board.<br/>
										<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Cards work by targeting 1, 2, or all player pieces.<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										This is represented by the number of borders on the card, 1 set of borders, 2 sets of borders, or 4 sets of borders.<br/>
										<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Cards with 1 set of borders will have 1 or 2 symbols, representing how far in the direction<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										of the symbol to move the player piece.<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Cards with 2 sets of borders will have 1 symbol in each set of borders, representing<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										that the player may make two independent moves.<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										This can be one target twice, or two targets once.<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Cards with 4 sets of borders will have 1 symbol, representing 1 movement for<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										ALL player pieces in the direction of the symbol.<br/>
										<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									3)	Discard a card to draw two cards.<br/>
							<br/>	
							End Condition:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								A player is moved off of the board.<br/>								
							<br/>	
							Win Condition:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								The player moved off the board is the winner.<br/>
						</p>
					";
	$GDR = "";
	$winrar = "";

	$infoContent = "This is written with PHP.<br><br>
					Other versions of this page are here:<br>
					<a href=\"http://htkb.dyndns.org/Section2/Project13.html\">HTML</a><br>
					<a href=\"http://htkb.dyndns.org/Section2/Project13.php\">PHP</a><br>
					<a href=\"http://htkb.dyndns.org/Javascript/Section2/Project13.html\">HTML Javascript</a><br>
					<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project13.asp\">ASP Javascript</a><br>
					<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project13.aspx\">ASP.NET Javascript</a><br>
					<a href=\"http://htkb.dyndns.org/Section2/Project13.shtml\">Perl</a><br>
					<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project13.jsp\">JSP</a><br>
					<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project13.xhtml\">JSF</a><br>
					<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project13.cshtml\">ASP.NET Web App</a><br>
					<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project13.aspx\">ASP.NET Webform</a><br>
					<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project13\">ASP.NET MVC App</a><br>
					<a href=\"http://htkb.dyndns.org/SSI/Section2/Project13.html\">Apache SSI</a><br>
				";
	

	#Overall body
	include $style.'Layout.php';
?>

</font></body></html>