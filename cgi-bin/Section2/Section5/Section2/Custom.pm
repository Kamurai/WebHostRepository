sub Navigation
{
	##  Writes the navigation content of the webpage

	my $Path = $_[0];
	my $DownPath = $_[1];
	
	print "<span class='navlink'>";
		print "<a href='".$Path."Section2/Section1/Index.shtml'>Gynowars</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section2/Project2.shtml'>Assault</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section2/Project3.shtml'>Mars</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section2/Section4/Index.shtml'>Renley</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section2/Section5/Index.shtml'>Antarrea</a>";
		print "<h5>";
			print "<span class='navlink'>";
				print "<a href='".$Path."Section2/Section5/Section1/Index.shtml'>Global</a>";
			print "</span>";
			print "<span class='navlink'>";
				print "<a href='".$Path."Section2/Section5/Section2/Index.shtml'>Grendol</a>";
				print "<h5>";
					print "<span class='navlink'>";
						print "<a href='".$Path."Section2/Section5/Section2/Project1.shtml'>Land of the Orcish Empire: Age of Magic</a>";
					print "</span>";
					print "<span class='navlink'>";
						print "<a href='".$Path."Section2/Section5/Section2/Project2.shtml'>Coliseum: Arena</a>";
					print "</span>";
				print "</h5>";
			print "</span>";
			print "<span class='navlink'>";
				print "<a href='".$Path."Section2/Section5/Section3/Index.shtml'>Utopia</a>";
			print "</span>";
			print "<span class='navlink'>";
				print "<a href='".$Path."Section2/Section5/Section4/Index.shtml'>Elvia</a>";
			print "</span>";
		print "</h5>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section2/Section6/Index.shtml'>Editations</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section2/Project7.shtml'>Truth</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section2/Project8.shtml'>Kingdoms</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section2/Project9.shtml'>Terminal World</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section2/Project10.shtml'>Monster Office Workplace</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section2/Project11.shtml'>Battle Princesses</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section2/Project12.shtml'>Sacred Offerings</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section2/Project13.shtml'>The Way</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section2/Project14.shtml'>Conspiratorium</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section2/Project15.shtml'>Conversion</a>";
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
			print "Grendol";
		}
		elsif($Page == 1)
		{
			print "Land of the Orcish Empire: Age of Magic";
		}
		elsif($Page == 2)
		{
			print "Coliseum: Arena";
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
				print "Grendol";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 1)
	{
		 print "<h2>";
			print "<u>";
				print "Land of the Orcish Empire: Age of Magic";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 2)
	{
		 print "<h2>";
			print "<u>";
				print "Coliseum: Arena";
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
			print "Here are projects based in the Grendol Empire:</br>";
			print "</br>";
			print "Land of the Orcish Empire: Age of Magic: a CCG based on the different factions that ";
			print "comprise the Grendol Empire.</br>";
			print "Coliseum: Arena: a CCG representing the gladitorial arenas of Grendol.</br>";
		}
		elsif($Page == 1)
		{
			print "Land of the Orcish Empire: Age of Magic: is a CCG based on the different factions that ";
			print "comprise the Grendol Empire.";
		}
		elsif($Page == 2)
		{
			print "Coliseum: Arena is a CCG representing the gladitorial arenas of Grendol.";
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
			print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/index.html\">HTML</a><br>";
			print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/index.php\">PHP</a><br>";
			print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section2/index.html\">HTML Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section2/index.asp\">ASP Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section2/index.aspx\">ASP.NET Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section2/index.jsp\">JSP</a><br>";
			print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section2/index.xhtml\">JSF</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section2/index.cshtml\">ASP.NET Web App</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section2/index.aspx\">ASP.NET Webform</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section2/index\">ASP.NET MVC App</a><br>";
			print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section2/index.html\">Apache SSI</a><br>";
			
		}
		elsif($Page == 1)
		{
			print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project1.html\">HTML</a><br>";
			print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project1.php\">PHP</a><br>";
			print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section2/Project1.html\">HTML Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section2/Project1.asp\">ASP Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section2/Project1.aspx\">ASP.NET Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section2/Project1.jsp\">JSP</a><br>";
			print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section2/Project1.xhtml\">JSF</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section2/Project1.cshtml\">ASP.NET Web App</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section2/Project1.aspx\">ASP.NET Webform</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section2/Project1\">ASP.NET MVC App</a><br>";
			print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section2/Project1.html\">Apache SSI</a><br>";
			
		}
		elsif($Page == 2)
		{
			print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project2.html\">HTML</a><br>";
			print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project2.php\">PHP</a><br>";
			print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section2/Project2.html\">HTML Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section2/Project2.asp\">ASP Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section2/Project2.aspx\">ASP.NET Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section2/Project2.jsp\">JSP</a><br>";
			print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section2/Project2.xhtml\">JSF</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section2/Project2.cshtml\">ASP.NET Web App</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section2/Project2.aspx\">ASP.NET Webform</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section2/Project2\">ASP.NET MVC App</a><br>";
			print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section2/Project2.html\">Apache SSI</a><br>";
			
		}
		
	print "</p>";
}

1;