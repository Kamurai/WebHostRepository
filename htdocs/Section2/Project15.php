<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
<!-- saved from url=(0023)./ -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"></head><body bgcolor="#000000" link="#C0C0C0" vlink="#808080" alink="#FF0000">
 
<font color="white">

<?php
	include 'Path.php';
	
	$title = "Conversion";
	$centerHeader = "<u>Conversion</u>";
	$centerContent = "
						<p align='left'>
							This section is dedicated to the board game project \"Conversion\".<br/>
							Compete on the elemental market by processing elements and becoming the elemental kingpin.
						</p>
						<p align='left'>
							You can download the Tabletop Simulator mod here:
							<a href='http://steamcommunity.com/sharedfiles/filedetails/?id=658966981'>Steam Workshop</a>
						</p>
						<p align='left'>
							<u>
								Conversion Ruleset v0.1<br/>
							</u>
							<br/>
							Setup:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Place board on table.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Place element tokens on the board, these are piece limited.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Place currency tokens to the side of the board.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Deal two objective cards to each player.<br/>
							<br/>
							Round:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								The round leader is the first player to go in a round.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								The round leader rotates clockwise each round.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Each player takes one action on their turn.<br/>
							<br/>
							Turn:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Go to Work:<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Generate an element.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Place elements in worker spots to do different conversions:<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Double an element<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Fire to Air<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Air to Water<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Water to Earth<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Earth to Fire<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Fire to Earth<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Earth to Water<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Water to Air<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Air to Fire<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Fair trade:<br/>
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											Put one element out for someone to trade with you.<br/>
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											Trade with a presented element.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Turn in an objective.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Return the designated elements to their respective pools.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Collect currency in the amount the highest element required, minus 1, times two. (n-1)*2<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Draw a new objective.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Buy elements, this can be from \"the bank\" or other players.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									When buying from other players, those players may set their own prices or refuse to sell.<br/>
							<br/>
							End condition:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Buy Out:
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								A player is out of objective cards, with at least 10 currency.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Retire:
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								A player is out of objective cards, has completed 5 objectives and is out of elements.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Shortage:
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								No elements can be collected.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Monopoly:
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								A player has all of one element.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Market Crash:
								&nbsp;&nbsp;
								No currency is available.<br/>
							<br/>
							Win condition:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								In the event of a tie, then the player that triggered the event wins.<br/>
						</p>
						
					";
	$GDR = "";
	$winrar = "";

	$infoContent = "This is written with PHP.<br><br>
					Other versions of this page are here:<br>
					<a href=\"http://htkb.dyndns.org/Section2/Project15.html\">HTML</a><br>
					<a href=\"http://htkb.dyndns.org/Section2/Project15.php\">PHP</a><br>
					<a href=\"http://htkb.dyndns.org/Javascript/Section2/Project15.html\">HTML Javascript</a><br>
					<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project15.asp\">ASP Javascript</a><br>
					<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project15.aspx\">ASP.NET Javascript</a><br>
					<a href=\"http://htkb.dyndns.org/Section2/Project15.shtml\">Perl</a><br>
					<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project15.jsp\">JSP</a><br>
					<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project15.xhtml\">JSF</a><br>
					<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project15.cshtml\">ASP.NET Web App</a><br>
					<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project15.aspx\">ASP.NET Webform</a><br>
					<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project15\">ASP.NET MVC App</a><br>
					<a href=\"http://htkb.dyndns.org/SSI/Section2/Project15.html\">Apache SSI</a><br>
				";
	

	#Overall body
	include $style.'Layout.php';
?>

</font></body></html>