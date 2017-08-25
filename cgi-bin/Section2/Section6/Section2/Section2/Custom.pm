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
	print "<a class=\"navlinkA\" href='".$Path."Section2/Section6/Index.shtml'>Editations</a><br><br>";
		print "<a class=\"navlinkB\" href='".$Path."Section2/Section6/Project1.shtml'>Magic: The Tactical</a><br><br>";
		print "<a class=\"navlinkB\" href='".$Path."Section2/Section6/Section2/Index.shtml'>Warhammer 40K</a><br><br>";
			print "<a class=\"navlinkC\" href='".$Path."Section2/Section6/Section2/Project1.shtml'>Mission!</a><br><br>";
			print "<a class=\"navlinkC\" href='".$Path."Section2/Section6/Section2/Section2/Index.shtml'>HTKB Armies</a><br><br>";
				print "<a class=\"navlinkD\" href='".$Path."Section2/Section6/Section2/Section2/Project1.shtml'>Ad Infinitum</a><br><br>";
				print "<a class=\"navlinkD\" href='".$Path."Section2/Section6/Section2/Section2/Project2.shtml'>Avia</a><br><br>";
				print "<a class=\"navlinkD\" href='".$Path."Section2/Section6/Section2/Section2/Project3.shtml'>De Luna</a><br><br>";
				print "<a class=\"navlinkD\" href='".$Path."Section2/Section6/Section2/Section2/Project4.shtml'>Eve</a><br><br>";
				print "<a class=\"navlinkD\" href='".$Path."Section2/Section6/Section2/Section2/Project5.shtml'>Geo Marines</a><br><br>";
				print "<a class=\"navlinkD\" href='".$Path."Section2/Section6/Section2/Section2/Project6.shtml'>Twin Fists</a><br><br>";
				print "<a class=\"navlinkD\" href='".$Path."Section2/Section6/Section2/Section2/Project7.shtml'>Voboulids</a><br><br>";
				print "<a class=\"navlinkD\" href='".$Path."Section2/Section6/Section2/Section2/Project8.shtml'>Fungi</a><br><br>";
				print "<a class=\"navlinkD\" href='".$Path."Section2/Section6/Section2/Section2/Project9.shtml'>Synergy</a><br><br>";
				print "<a class=\"navlinkD\" href='".$Path."Section2/Section6/Section2/Section2/Project10.shtml'>The Dark</a><br><br>";
				print "<a class=\"navlinkD\" href='".$Path."Section2/Section6/Section2/Section2/Project11.shtml'>Vivus Mortem</a><br><br>";
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
			print "HTKB Armies";
		}
		elsif($Page == 1)
		{
			print "Ad Infinitum";
		}
		elsif($Page == 2)
		{
			print "Avia";
		}
		elsif($Page == 3)
		{
			print "De Luna";
		}
		elsif($Page == 4)
		{
			print "Eve";
		}
		elsif($Page == 5)
		{
			print "Geo Marines";
		}
		elsif($Page == 6)
		{
			print "Twin Fists";
		}
		elsif($Page == 7)
		{
			print "Voboulids";
		}
		elsif($Page == 8)
		{
			print "Fungi";
		}
		elsif($Page == 9)
		{
			print "Synergy";
		}
		elsif($Page == 10)
		{
			print "The Dark";
		}
		elsif($Page == 11)
		{
			print "Vivus Mortem";
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
			print "HTKB Armies";
		print "</h2>";
	}
	elsif($Page == 1)
	{
		 print "<h2>";
			print "Ad Infinitum";
		print "</h2>";
	}
	elsif($Page == 2)
	{
		 print "<h2>";
			print "Avia";
		print "</h2>";
	}
	elsif($Page == 3)
	{
		 print "<h2>";
			print "De Luna";
		print "</h2>";
	}
	elsif($Page == 4)
	{
		 print "<h2>";
			print "Eve";
		print "</h2>";
	}
	elsif($Page == 5)
	{
		 print "<h2>";
			print "Geo Marines";
		print "</h2>";
	}
	elsif($Page == 6)
	{
		 print "<h2>";
			print "Twin Fists";
		print "</h2>";
	}
	elsif($Page == 7)
	{
		 print "<h2>";
			print "Voboulids";
		print "</h2>";
	}
	elsif($Page == 8)
	{
		 print "<h2>";
			print "Fungi";
		print "</h2>";
	}
	elsif($Page == 9)
	{
		 print "<h2>";
			print "Synergy";
		print "</h2>";
	}
	elsif($Page == 10)
	{
		 print "<h2>";
			print "The Dark";
		print "</h2>";
	}
	elsif($Page == 11)
	{
		 print "<h2>";
			print "Vivus Mortem";
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
			print "This section is dedicated to HTKB designed armies based on the Warhammer 40K universe.";
		}
		elsif($Page == 1)
		{
			print "Ad Infinitum is a collective of A.I. constructs.  Little is known about these constructs ";
			print "as they are not known to negotiate.  While some technology has been recovered, it is rare ";
			print "to find anything viable after battles.";
		}
		elsif($Page == 2)
		{
			print "The Avia are a humanoid xenos that are naturally equipped with wings.  They can are the very least ";
			print "glide for short times without technological assistance.";
		}
		elsif($Page == 3)
		{
			print "De Luna is a designation for squads of walker vehicles that tend to ambush their targets.  ";
			print "While De Luna are automated vehicles, wreckage has determine that there are seats for ";
			print "pilots.  Theories range from A.I. control to remote communication.";
		}
		elsif($Page == 4)
		{
			print "The Eve are a race of terrifying beast creatures. ";
			print "These Xenos somewhat resemble large cats.";
		}
		elsif($Page == 5)
		{
			print "Geo Marines are a specialized Chapter concentrating equipment speciality.";
		}
		elsif($Page == 6)
		{
			print "This lost Chapter spent far too long stranded outside the reach of civilisation.  ";
			print "The Twin Fists specialize in close combat battles.";
		}
		elsif($Page == 7)
		{
			print "Vouboulids are a plant-like group of entities.  Using a hive structure, ";
			print "these Xenos seem to concentrate on populating one area at a time, causing a slow expansion.";
		}
		elsif($Page == 8)
		{
			print "These Xenos are unidentifiable as anything other than an advanced form of Fungus.  ";
			print "Their appearances range incredible wide, but tend to even resemble familiar forms of fungus.";
		}
		elsif($Page == 9)
		{
			print "These almost intangible Xenos appear to made of energy itself.  They use technology that appears unstable in nature.";
		}
		elsif($Page == 10)
		{
			print "The Dark are a Hive centered Xenos resembling a disturbing cross between snake, bird and insect.";
		}
		elsif($Page == 11)
		{
			print "Vivus mortem is a category for humans that are encountered and exhibit certain traits.  These possibly once humans ";
			print "have extreme abilities to endure the harshest environment, avoid lighted scenarios whenever possible, and attempt to ";
			print "take human prisoner whenever possible.  Escapees had stated that the Vivus Mortem would feed on them, and upon death ";
			print "and exposed bodies lose their excessive durability and seem to disintegrate rapidly enough to appear to 'turn to ash'.";
		}
	print "</p>";

}

sub Versions
{
	my $Page = $_[0];

	print "Other versions of this page are here:<br>";
	if($Page <= 0)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/index.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/index.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/index.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/index.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/index.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/index.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/index.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/index.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/index.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/index\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/index.html\">Apache SSI</a><br>";
		
	}
	elsif($Page == 1)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project1.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project1.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project1.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project1.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project1.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project1.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project1.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project1.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project1.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project1\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project1.html\">Apache SSI</a><br>";
		
	}
	elsif($Page == 2)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project2.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project2.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project2.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project2.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project2.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project2.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project2.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project2.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project2.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project2\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project2.html\">Apache SSI</a><br>";
		
	}
	elsif($Page == 3)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project3.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project3.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project3.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project3.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project3.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project3.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project3.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project3.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project3.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project3\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project3.html\">Apache SSI</a><br>";
	}
	elsif($Page == 4)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project4.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project4.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project4.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project4.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project4.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project4.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project4.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project4.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project4.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project4\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project4.html\">Apache SSI</a><br>";
	}
	elsif($Page == 5)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project5.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project5.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project5.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project5.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project5.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project5.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project5.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project5.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project5.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project5\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project5.html\">Apache SSI</a><br>";
	}
	elsif($Page == 6)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project6.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project6.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project6.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project6.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project6.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project6.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project6.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project6.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project6.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project6\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project6.html\">Apache SSI</a><br>";
	}
	elsif($Page == 7)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project7.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project7.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project7.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project7.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project7.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project7.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project7.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project7.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project7.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project7\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project7.html\">Apache SSI</a><br>";
	}
	elsif($Page == 8)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project8.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project8.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project8.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project8.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project8.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project8.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project8.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project8.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project8.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project8\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project8.html\">Apache SSI</a><br>";
	}
	elsif($Page == 9)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project9.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project9.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project9.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project9.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project9.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project9.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project9.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project9.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project9.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project9\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project9.html\">Apache SSI</a><br>";
	}
	elsif($Page == 10)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project10.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project10.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project10.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project10.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project10.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project10.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project10.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project10.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project10.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project10\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project10.html\">Apache SSI</a><br>";
	}
	elsif($Page == 11)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project11.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project11.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project11.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project11.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project11.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project11.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project11.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project11.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project11.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project11\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project11.html\">Apache SSI</a><br>";
	}
	else
	{
		print "NOPE!";
	}
	
}

1;