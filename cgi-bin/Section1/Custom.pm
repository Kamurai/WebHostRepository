sub Navigation
{
	##  Writes the navigation content of the webpage

	my $Path = $_[0];
	my $DownPath = $_[1];
	
	print "<a class=\"navlinkA\" href='".$Path."Section1/Project1.html'>Basic HTML</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Project1.php'>PHP</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Section2/index.shtml'>Javascript</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Project3.shtml'>Perl</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Section4/index.shtml'>Java</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Section5/index.shtml'>ASP.Net</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Section6/index.shtml'>Databases</a><br><br>";
	print "<a class=\"navlinkA\" href='http://htkb.dyndns.org/SSI/Section1/index.html'>Apache SSI</a><br><br>";

}

sub Title
{
	##  Writes the Title of the webpage

	my $Page = $_[0];

	print "<title>";
		if($Page <= 0)
		{
			print "Web Programming";
		}
		elsif($Page == 2)
		{
			print "Javascript Programming";
		}
		elsif($Page == 3)
		{
			print "Perl Programming";
		}
		elsif($Page == 4)
		{
			print "Java Programming";
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
			print "Web Programming";
		print "</h2>";
	}
	elsif($Page == 2)
	{
		print "<h2>";
			print "Javascript Programming";
		print "</h2>";
	}
	elsif($Page == 3)
	{
		print "<h2>";
			print "Perl Programming";
		print "</h2>";
	}
	elsif($Page == 4)
	{
		print "<h2>";
			print "Java Programming";
		print "</h2>";
	}
}

sub Content
{
	##  Writes the content of the webpage
	my $Page = $_[0];

	print "<p id=\"idCenterContent\">";
		if($Page <= 0)
		{
			print "This section is dedicated to web-based programming.";
		}
		elsif($Page == 1)
		{
			print "This section is dedicated to Javascript based programming.";
		}
		elsif($Page == 3)
		{
			print "This section is dedicated to Perl based programming.";
		}
		elsif($Page == 4)
		{
			print "This section is dedicated to Java based programming.";
		}
	print "</p>";

}

sub Versions
{
	my $Page = $_[0];

	print "Other versions of this page are here:<br>";
	if($Page <= 0)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/index.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section1/index.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/index.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/index.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/index.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/index.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/index.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/index.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/index.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/index\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section1/index.html\">Apache SSI</a><br>";
		
	}
	elsif($Page == 1)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Project1.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section1/Project1.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Project1.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project1.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project1.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project1.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project1.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project1.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project1.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Project1\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Project1.html\">Apache SSI</a><br>";
		
	}
	elsif($Page == 2)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Project2.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section1/Project2.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Project2.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project2.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project2.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project2.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project2.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project2.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project2.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Project2\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Project2.html\">Apache SSI</a><br>";
		
	}
	elsif($Page == 3)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Project3.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section1/Project3.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Project3.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project3.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project3.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project3.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project3.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project3.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project3.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Project3\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Project3.html\">Apache SSI</a><br>";
	}
	elsif($Page == 4)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Project4.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section1/Project4.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Project4.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project4.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project4.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project4.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project4.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project4.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project4.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Project4\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Project4.html\">Apache SSI</a><br>";
	}

}

1;