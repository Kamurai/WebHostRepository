sub Navigation
{
	##  Writes the navigation content of the webpage

	my $Path = $_[0];
	my $DownPath = $_[1];
	
		print "<a class=\"navlinkA\" href='".$Path."Section2/Section1/Index.shtml'>Gynowars</a><br><br>";
		print "<a class=\"navlinkA\" href='".$Path."Section2/Project2.shtml'>Assault</a><br><br>";
		print "<a class=\"navlinkA\" href='".$Path."Section2/Project3.shtml'>Mars</a><br><br>";
		print "<a class=\"navlinkA\" href='".$Path."Section2/Section4/Index.shtml'>Renley</a><br><br>";
		print "<a class=\"navlinkA\" href='".$Path."Section2/Section5/Index.shtml'>Antarrea</a><br><br>";
			print "<a class=\"navlinkB\" href='".$Path."Section2/Section5/Section1/Index.shtml'>Global</a><br><br>";
				print "<a class=\"navlinkC\" href='".$Path."Section2/Section5/Section1/Project1.shtml'>Team Tactial: Crash Ball</a><br><br>";
				print "<a class=\"navlinkC\" href='".$Path."Section2/Section5/Section1/Project2.shtml'>Wars of Antarrea</a><br><br>";
				print "<a class=\"navlinkC\" href='".$Path."Section2/Section5/Section1/Project3.shtml'>Revolutions: Invading Nations</a><br><br>";
				print "<a class=\"navlinkC\" href='".$Path."Section2/Section5/Section1/Project4.shtml'>Revolutions: Rebellion Against the Fist</a><br><br>";
				print "<a class=\"navlinkC\" href='".$Path."Section2/Section5/Section1/Project5.shtml'>Revolutions: Return to Arms</a><br><br>";
				print "<a class=\"navlinkC\" href='".$Path."Section2/Section5/Section1/Project6.shtml'>Revolutions: Post Wars</a><br><br>";
			print "<a class=\"navlinkB\" href='".$Path."Section2/Section5/Section2/Index.shtml'>Grendol</a><br><br>";
			print "<a class=\"navlinkB\" href='".$Path."Section2/Section5/Section3/Index.shtml'>Utopia</a><br><br>";
			print "<a class=\"navlinkB\" href='".$Path."Section2/Section5/Section4/Index.shtml'>Elvia</a><br><br>";
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
			print "Global Antarrea";
		}
		elsif($Page == 1)
		{
			print "Team Tactical: Crash Ball";
		}
		elsif($Page == 2)
		{
			print "Wars of Antarrea";
		}
		elsif($Page == 3)
		{
			print "Revolutions: Invading Nations";
		}
		elsif($Page == 4)
		{
			print "Revolutions: Rebellion Against the Fist";
		}
		elsif($Page == 5)
		{
			print "Revolutions: Return to Arms";
		}
		elsif($Page == 6)
		{
			print "Revolutions: Post Wars";
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
			print "Global Antarrea";
		print "</h2>";
	}
	elsif($Page == 1)
	{
		 print "<h2>";
			print "Team Tactical: Crash Ball";
		print "</h2>";
	}
	elsif($Page == 2)
	{
		 print "<h2>";
			print "Wars of Antarrea";
		print "</h2>";
	}
	elsif($Page == 3)
	{
		 print "<h2>";
			print "Revolutions: Invading Nations";
		print "</h2>";
	}
	elsif($Page == 4)
	{
		 print "<h2>";
			print "Revolutions: Rebellion Against the Fist";
		print "</h2>";
	}
	elsif($Page == 5)
	{
		 print "<h2>";
			print "Revolutions: Return to Arms";
		print "</h2>";
	}
	elsif($Page == 6)
	{
		 print "<h2>";
			print "Revolutions: Post Wars";
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
			print "Here are projects based in the Antarrea universe:</br>";
			print "</br>";
			print "Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>";
			print "Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>";
			print "Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>";
			print "Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>";
			print "Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>";
			print "Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>";
		 }
		elsif($Page == 1)
		{
			print "Team Tactical: Crash Ball is a tactical board game centered on a battle version of football.</br>";
		}
		elsif($Page == 2)
		{
			print "Wars of Antarrea is a table-top game where two or more armies battle for supremacy.</br>";
		}
		elsif($Page == 3)
		{
			print "Revolutions is a Tactical RPG with Invading Nations as its 1st story arc.</br>";
		}
		elsif($Page == 4)
		{
			print "Revolutions is a Tactical RPG with Rebellion Against the Fist as its 2nd story arc.</br>";
		}
		elsif($Page == 5)
		{
			print "Revolutions is a Tactical RPG with Return to Arms as its 3rd story arc.</br>";
		}
		elsif($Page == 6)
		{
			print "Revolutions is a Tactical RPG with Post Wars as its 4th story arc.</br>";
		}
	print "</p>";


}

sub Versions
{
	my $Page = $_[0];

	print "Other versions of this page are here:<br>";
	if($Page <= 0)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/index.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/index.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/index.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/index.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/index.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/index.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/index.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/index.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/index.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/index\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/index.html\">Apache SSI</a><br>";
		
	}
	elsif($Page == 1)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project1.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project1.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/Project1.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project1.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project1.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project1.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project1.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project1.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project1.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project1\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project1.html\">Apache SSI</a><br>";
		
	}
	elsif($Page == 2)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project2.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project2.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/Project2.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project2.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project2.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project2.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project2.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project2.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project2.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project2\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project2.html\">Apache SSI</a><br>";
		
	}
	elsif($Page == 3)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project3.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project3.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/Project3.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project3.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project3.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project3.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project3.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project3.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project3.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project3\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project3.html\">Apache SSI</a><br>";
	}
	elsif($Page == 4)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project4.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project4.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/Project4.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project4.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project4.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project4.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project4.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project4.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project4.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project4\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project4.html\">Apache SSI</a><br>";
	}
	elsif($Page == 5)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project5.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project5.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/Project5.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project5.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project5.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project5.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project5.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project5.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project5.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project5\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project5.html\">Apache SSI</a><br>";
	}
	elsif($Page == 6)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project6.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project6.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/Project6.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project6.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project6.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project6.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project6.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project6.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project6.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project6\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project6.html\">Apache SSI</a><br>";
	}
	
}

1;