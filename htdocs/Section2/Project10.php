<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
<!-- saved from url=(0023)./ -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"></head><body bgcolor="#000000" link="#C0C0C0" vlink="#808080" alink="#FF0000">
 
<font color="white">

<?php
	include 'Path.php';
	
	$title = "Monster Office Workplace";
	$centerHeader = "<u>Monster Office Workplace</u>";
	$centerContent = "
						<p align='left'>
							This section is dedicated to the card and board game project 'Monster Office Workplace'.  These monsters mean serious business.<br/>
							Can you earn the most credit and smooze your way into a promotion?<br/>
						</p>
						<p align='left'>
							You can download the Tabletop Simulator mod here:<br/>
							<a href='http://steamcommunity.com/sharedfiles/filedetails/?id=691344800'>Steam Workshop</a><br/>
						</p>
						<p align='left'>
							Monster Office Ruleset v0.1<br/>
							<br/>
							1) Player resources:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;1) Resource deck: Work (Resource) Cards<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;2) Project Deck: Cards representing project tiles.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;3) Player tokens<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;4) Credit tokens<br/>
							2) Setup:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;1) Each player gets 3 resource cards, and 1 project card.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;2) Before the game, each player plays their project card.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;3) Going first:<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1) Each player plays 1 card face down and everyone reveals at once(do not discard).<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2) The highest non-common card (ties are eliminated), goes first.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3) In the case that everyone ties, perform rounds until someone wins.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4) If all cards are played, then 1 card is dealt to each player face up until a winner occurs.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5) Each player keeps the cards he/she is dealt.<br/>
							3) Grid map to which project tiles are played.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;1)  Player must place to a valid space, if available.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;2)  If no space is available, then the player chooses how projects shift.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)  The player must shift the least amount of projects.<br/>
							4) Projects require different resources by type and number/quantity.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;1) When meeting project requirements, place a player token on the card stack<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;2) Points of credit are earned upon project completion by project rewards (Listed on the project tile.).<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;3) There are 6 'colors' of resources with the following quantities:<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1) 1 card with quantity of 5.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2) 2 cards with quantity of 4.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3) 3 cards with quantity of 3.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4) 4 cards with quantity of 2.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5) 5 cards with quantity of 1.<br/>
							5) Actions:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;1) Draw Project: only 1.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;2) Play Project: only 1.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;3) Draw Resources: 3 resources.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;4) Play Resources: As many as available.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1) Place a number of tokens equal to the number on the resource card on the project tile.<br/>
							6) Restrictions<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;1) Hand Limit: each player has a hand limit of 6 cards.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;2) Workhorse: the player with the lowest score has no hand limit.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1) Any player with a score of zero counts as a Workhorse.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2) People tied for Workhorse are all Workhorses.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;3) Workhorse is evaluated at each person's discard phase, i.e. a player only discards if they are NOT a workhorse
									at THEIR discard phase.<br/>
							7) Scoring:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;1) A player who completes the project collects the project.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;2) A player gets 1 point of credit for completing a project's color set (exactly) once the project has been completed.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;3) A player gets 1 point of credit for each player token on the project that has been completed.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;4) A player gets a number of points of credit equal to the number of color sets on the project tile,
									for being the one to complete a project.<br/>
							8) End Conditions:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;1) Game ends when 10 projects have been completed.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;2) Player with the most 'credit' wins.<br/>						
						</p>
						
					";
	$GDR = "";
	$winrar = "";

	$infoContent = "This is written with PHP.<br><br>
					Other versions of this page are here:<br>
					<a href=\"http://htkb.dyndns.org/Section2/Project10.html\">HTML</a><br>
					<a href=\"http://htkb.dyndns.org/Section2/Project10.php\">PHP</a><br>
					<a href=\"http://htkb.dyndns.org/Javascript/Section2/Project10.html\">HTML Javascript</a><br>
					<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project10.asp\">ASP Javascript</a><br>
					<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project10.aspx\">ASP.NET Javascript</a><br>
					<a href=\"http://htkb.dyndns.org/Section2/Project10.shtml\">Perl</a><br>
					<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project10.jsp\">JSP</a><br>
					<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project10.xhtml\">JSF</a><br>
					<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project10.cshtml\">ASP.NET Web App</a><br>
					<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project10.aspx\">ASP.NET Webform</a><br>
					<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project10\">ASP.NET MVC App</a><br>
					<a href=\"http://htkb.dyndns.org/SSI/Section2/Project10.html\">Apache SSI</a><br>
				";
	

	#Overall body
	include $style.'Layout.php';
?>

</font></body></html>