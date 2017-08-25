sub Navigation
{
	##  Writes the navigation content of the webpage

	my $Path = $_[0];
	my $DownPath = $_[1];
	
	print "<a class=\"navlinkA\" href='".$Path."Section2/Section1/Index.shtml'>Gynowars</a><br><br>";
		print "<a class=\"navlinkB\" href='".$Path."Section2/Section1/Project1.shtml'>Gynowars RPG</a><br><br>";
		print "<a class=\"navlinkB\" href='".$Path."Section2/Section1/Project2.shtml'>Gynowars: Battle Arena CCG</a><br><br>";
		print "<a class=\"navlinkB\" href='".$Path."Section2/Section1/Project3.shtml'>Gynowars: Crash Ball</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project2.shtml'>Assault</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project3.shtml'>Mars</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Section4/Index.shtml'>Renley</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Section5/Index.shtml'>Antarrea</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Section6/Index.shtml'>Editations</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project7.shtml'>Truth</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project8.shtml'>Kingdoms</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project9.shtml'>Terminal World</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project10.shtml'>Monster Office Workplace</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project11.shtml'>Battle Princesses</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project12.shtml'>Sacred Offerings</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project13.shtml'>The Way</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project14.shtml'>Conspiratorium</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project15.shtml'>Conversion</a><br><br>";

}

sub Title
{
	##  Writes the Title of the webpage

	my $Page = $_[0];

	print "<title>";
		if($Page <= 0)
		{
			print "Gynowars";
		}
		elsif($Page == 1)
		{
			print "Gynowars RPG";
		}
		elsif($Page == 2)
		{
			print "Gynowars: Battle Arena CCG";
		}
		elsif($Page == 3)
		{
			print "Gynowars: Crash Ball";
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
			print "Gynowars";
		print "</h2>";
	}
	elsif($Page == 1)
	{
		 print "<h2>";
			print "Gynowars RPG";
		print "</h2>";
	}
	elsif($Page == 2)
	{
		 print "<h2>";
			print "Gynowars: Battle Arena CCG";
		rint "</h2>";
	}
	elsif($Page == 3)
	{
		 print "<h2>";
			print "Gynowars: Crash Ball";
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
			print "This section is dedicated to projects centered in the Gynowars universe.";
		}
		elsif($Page == 1)
		{
			print "The Gynowars RPG is a 'pokemon-like' tactical RPG.";
			print "The protagonist uses creatures to fight battles against other creatures to progress through the storyline.";
		}
		elsif($Page == 2)
		{
			print "Gynowars: Battle Arena is a CCG that pits teams of creatures against each other ";
			print "in an arena-like environment.  There are several scenarios to run, to include:";
			print "</br>";
			print "'Death Match', 'Ring the Bell', and 'Head Hunt'.";
		}
		elsif($Page == 3)
		{
			print "Gynowars: Crash Ball is a turn based strategy board game.  Basically it's gridiron with Gynos.";
		}
	print "</p>";


}

sub Versions
{
	my $Page = $_[0];

	print "Other versions of this page are here:<br>";
	if($Page <= 0)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section1/index.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section1/index.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section1/index.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section1/index.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section1/index.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section1/index.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/index.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section1/index.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section1/index.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section1/index\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section1/index.html\">Apache SSI</a><br>";
		
	}
	elsif($Page == 1)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section1/Project1.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section1/Project1.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section1/Project1.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section1/Project1.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section1/Project1.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section1/Project1.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/Project1.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section1/Project1.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section1/Project1.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section1/Project1\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section1/Project1.html\">Apache SSI</a><br>";
		
	}
	elsif($Page == 2)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section1/Project2.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section1/Project2.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section1/Project2.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section1/Project2.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section1/Project2.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section1/Project2.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/Project2.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section1/Project2.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section1/Project2.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section1/Project2\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section1/Project2.html\">Apache SSI</a><br>";
		
	}
	elsif($Page == 3)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section1/Project3.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section1/Project3.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section1/Project3.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section1/Project3.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section1/Project3.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section1/Project3.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/Project3.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section1/Project3.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section1/Project3.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section1/Project3\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section1/Project3.html\">Apache SSI</a><br>";
	}

}

1;