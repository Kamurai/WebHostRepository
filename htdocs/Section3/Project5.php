<?php
	include './Layout.php';
	
    $Page = 5;
    $Level = 1;
    $Section = 3;
    #Overall body
	WriteLayout($Page, $Level, $Section);
    
    include 'Path.php';
	
	$title = "C++ Downloads";
	$centerHeader = "C++ Downloads";
	$centerContent = "
						Here are C++ Programs to download:</br>
						</br>
						HTKB Bar Code System:<t><a href='../downloads/pichaku.zip'>This is currently not available.</a></br>
					";
	$GDR = "";
	$winrar = "<a href='../Downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>";

	$infoContent = "This is written with PHP.<br><br>
					Other versions of this page are here:<br>
					<a href=\"http://htkb.dyndns.org/Section3/Project5.html\">HTML</a><br>
					<a href=\"http://htkb.dyndns.org/Javascript/Section3/Project5.html\">HTML Javascript</a><br>
					<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Project5.asp\">ASP Javascript</a><br>
					<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Project5.aspx\">ASP.NET Javascript</a><br>
					<a href=\"http://htkb.dyndns.org/Section3/Project5.shtml\">Perl</a><br>
					<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section3/Project5.jsp\">JSP</a><br>
					<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Project5.xhtml\">JSF</a><br>
					<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Project5.cshtml\">ASP.NET Web App</a><br>
					<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Project5.aspx\">ASP.NET Webform</a><br>
					<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section3/Project5\">ASP.NET MVC App</a><br>
					<a href=\"http://htkb.dyndns.org/SSI/Section3/Project5.html\">Apache SSI</a><br>
				";
	

	#Overall body
	include $style.'Layout.php';
?>
</body>
</font>
</html>