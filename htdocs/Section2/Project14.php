<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
<!-- saved from url=(0023)./ -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"></head><body bgcolor="#000000" link="#C0C0C0" vlink="#808080" alink="#FF0000">
 
<font color="white">

<?php
	include 'Path.php';
	
	$title = "Conspiratorium";
	$centerHeader = "<u>Conspiratorium</u>";
	$centerContent = "
						<p align='left'>
							This section is dedicated to the board game project 'Conspiratorium'.<br/>
							A game of assassins and CIA, you must remember who is friend and who is not.
						</p>
						<p align='left'>
							You can download the Tabletop Simulator mod here:
							<a href='http://steamcommunity.com/sharedfiles/filedetails/?id=656617895'>Steam Workshop</a>
						</p>
						<p align='left'>
							<u>
								Consipatorium Ruleset v0.1<br/>
							</u>
							<br/>
							Setup:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Board<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Token Set: 100 tokens per player<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Divide tokens equally amongst players<br/>
							<br/>	
							Round:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Each player takes a turn performing one action.<br/>
							<br/>	
							Turn:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								On its turn, a player may do one of the following actions:<br/>
									<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Recon:
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Look at a token affiliation.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Turn:
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Change the affiliation of a token.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Move Asset:
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Move a token to an adajecent space on the board.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Assasinate:
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Have a token on the board remove another adjacent token on the board.<br/>
							<br/>		
							End Condition:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								One token is left on the board.<br/>
							<br/>	
							Win Condition:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								The player matching the affiliation of the last remaining token on the board wins.<br/>
						</p>
						
					";
	$GDR = "";
	$winrar = "";

	$infoContent = "This is written with PHP.<br><br>
					Other versions of this page are here:<br>
					<a href=\"http://htkb.dyndns.org/Section2/Project14.html\">HTML</a><br>
					<a href=\"http://htkb.dyndns.org/Section2/Project14.php\">PHP</a><br>
					<a href=\"http://htkb.dyndns.org/Javascript/Section2/Project14.html\">HTML Javascript</a><br>
					<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project14.asp\">ASP Javascript</a><br>
					<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project14.aspx\">ASP.NET Javascript</a><br>
					<a href=\"http://htkb.dyndns.org/Section2/Project14.shtml\">Perl</a><br>
					<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project14.jsp\">JSP</a><br>
					<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project14.xhtml\">JSF</a><br>
					<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project14.cshtml\">ASP.NET Web App</a><br>
					<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project14.aspx\">ASP.NET Webform</a><br>
					<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project14\">ASP.NET MVC App</a><br>
					<a href=\"http://htkb.dyndns.org/SSI/Section2/Project14.html\">Apache SSI</a><br>
				";
	

	#Overall body
	include $style.'Layout.php';
?>

</font></body></html>