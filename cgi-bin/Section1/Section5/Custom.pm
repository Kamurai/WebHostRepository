sub Navigation
{
	##  Writes the navigation content of the webpage

	my $Path = $_[0];
	my $DownPath = $_[1];
	
	print "<span class='navlink'>";
		print "<a href='".$Path."Section1/Project1.html'>Basic HTML</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section1/Project1.php'>PHP</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section1/Section2/Index.shtml'>Javascript</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section1/Project3.shtml'>Perl</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section1/Section4/Index.shtml'>Java</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section1/Section5/Index.shtml'>ASP.NET</a>";
		print "<h5>";
			print "<span class='navlink'>";
				print "<a href='http://htkb.dyndns.org:81/WebApplication/Section1/Section5/Project1.cshtml'>Webpage Application</a>";
			print "</span>";
			print "<span class='navlink'>";
				print "<a href='http://htkb.dyndns.org:81/WebForm/Section1/Section5/Project2.aspx'>Webform Application</a>";
			print "</span>";
			print "<span class='navlink'>";
				print "<a href='http://htkb.dyndns.org:81/MVC/Section1_5/Project3'>MVC Application</a>";
			print "</span>";
		print "</h5>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section1/Section6/Index.shtml'>Databases</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='http://htkb.dyndns.org/SSI/Section1/index.html'>Apache SSI</a>";
	print "</span>";
	print "<br>";
}

sub Title
{
	##  Writes the Title of the webpage

	my $Page = $_[0];

	print "<title>";
		if($Page <= 0)
		{
			print "ASP.NET";
		}
	print "</title>";
}

sub Header
{
	##  Writes the header of the webpage content

	my $Page = $_[0];

	if($Page <= 0)
	{
		print "<h2>";
			print "<u>";
				print "ASP.NET";
			print "</u>";
		print "</h2>";
	}
}

sub Content
{
	##  Writes the content of the webpage
	my $Page = $_[0];

	print "<p align='left'>";
		if($Page <= 0)
		{
			print "This section is dedicated to ASP.NET programming.";
		}
	print "</p>";

}

sub Versions
{
	my $Page = $_[0];

	print "<p align='left'>";
		print "Other versions of this page are here:<br>";
		if($Page <= 0)
		{
			print "<a href=\"http://htkb.dyndns.org/Section1/Section5/index.html\">HTML</a><br>";
			print "<a href=\"http://htkb.dyndns.org/Section1/Section5/index.php\">PHP</a><br>";
			print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section5/index.html\">HTML Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section5/index.asp\">ASP Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section5/index.aspx\">ASP.NET Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section5/index.jsp\">JSP</a><br>";
			print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section5/index.xhtml\">JSF</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section5/index.cshtml\">ASP.NET Web App</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section5/index.aspx\">ASP.NET Webform</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section5/index\">ASP.NET MVC App</a><br>";
			print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section5/index.html\">Apache SSI</a><br>";
			
		}
		
	print "</p>";
}

1;