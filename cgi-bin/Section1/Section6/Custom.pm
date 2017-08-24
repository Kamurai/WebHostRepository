sub Navigation
{
	##  Writes the navigation content of the webpage

	my $Path = $_[0];
	my $DownPath = $_[1];
	
	print "<a class=\"navlinkA\" href='".$Path."Section1/Project1.html'>Basic HTML</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Project1.php'>PHP</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Section2/Index.shtml'>Javascript</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Project3.shtml'>Perl</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Section4/Index.shtml'>Java</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Section5/Index.shtml'>ASP.NET</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Section6/Index.shtml'>Databases</a><br><br>";
		print "<a class=\"navlinkB\" href='".$Path."Section1/Section6/Project1.shtml'>Oracle</a><br><br>";
		print "<a class=\"navlinkB\" href='".$Path."Section1/Section6/Project2.shtml'>Derby</a><br><br>";
		print "<a class=\"navlinkB\" href='".$Path."Section1/Section6/Project3.shtml'>MySQL</a><br><br>";
		print "<a class=\"navlinkB\" href='".$Path."Section1/Section6/Project4.shtml'>SQL Server</a><br><br>";
		print "<a class=\"navlinkB\" href='".$Path."Section1/Section6/Project5.shtml'>Postgres</a><br><br>";
	print "<a class=\"navlinkA\" href='http://htkb.dyndns.org/SSI/Section1/index.html'>Apache SSI</a><br><br>";

}

sub Title
{
	##  Writes the Title of the webpage

	my $Page = $_[0];

	print "<title>";
		if($Page <= 0)
		{
			print "Database Programming";
		}
		elsif($Page == 1)
		{
			print "Oracle Programming";
		}
		elsif($Page == 2)
		{
			print "Derby Programming";
		}
		elsif($Page == 3)
		{
			print "MySQL Programming";
		}
		elsif($Page == 4)
		{
			print "SQL Server Programming";
		}
		elsif($Page == 5)
		{
			print "Postgres Programming";
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
			print "Database Programming";
		print "</h2>";
	}
	elsif($Page == 1)
	{
		 print "<h2>";
			print "Oracle Programming";
		print "</h2>";
	}
	elsif($Page == 2)
	{
		print "<h2>";
			print "Derby Programming";
		print "</h2>";
	}
	elsif($Page == 3)
	{
		print "<h2>";
			print "MySQL Programming";
		print "</h2>";
	}
	elsif($Page == 4)
	{
		print "<h2>";
			print "SQL Server Programming";
		print "</h2>";
	}
	elsif($Page == 5)
	{
		print "<h2>";
			print "Postgres Programming";
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
			print "This section is dedicated to database based programming.";
		}
		elsif($Page == 1)
		{
			print "This section is dedicated to Oracle based programming.";
		}
		elsif($Page == 2)
		{
			print "This section is dedicated to Derby based programming.";
		}
		elsif($Page == 3)
		{
			print "This section is dedicated to MySQL based programming.";
		}
		elsif($Page == 4)
		{
			print "This section is dedicated to SQL Server based programming.";
		}
		elsif($Page == 5)
		{
			print "This section is dedicated to Postgres based programming.";
		}
	print "</p>";

}

sub Versions
{
	my $Page = $_[0];

	print "Other versions of this page are here:<br>";
	if($Page <= 0)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Section6/index.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section1/Section6/index.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section6/index.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/index.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/index.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/index.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/index.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/index.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/index.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section6/index\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/index.html\">Apache SSI</a><br>";
		
	}
	elsif($Page == 1)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section6/Project1.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project1.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project1.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project1.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project1.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project1.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project1.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section6/Project1\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project1.html\">Apache SSI</a><br>";
		
	}
	elsif($Page == 2)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section6/Project2.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project2.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project2.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project2.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project2.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project2.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project2.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section6/Project2\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project2.html\">Apache SSI</a><br>";
		
	}
	elsif($Page == 3)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section6/Project3.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project3.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project3.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project3.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project3.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project3.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project3.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section6/Project3\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project3.html\">Apache SSI</a><br>";
	}
	elsif($Page == 4)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project4.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project4.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section6/Project4.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project4.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project4.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project4.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project4.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project4.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project4.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section6/Project4\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project4.html\">Apache SSI</a><br>";
	}
	elsif($Page == 5)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project5.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project5.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section6/Project5.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project5.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project5.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project5.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project5.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project5.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project5.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section6/Project5\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project5.html\">Apache SSI</a><br>";
	}
	
}

1;