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
			print "Antarrea Projects";
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
			print "Antarrea Projects";
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
					print "Global:";
			print "<br>";
			print "<br>";
				print "Here are projects based in the Antarrea universe:</br>";
				print "</br>";
				print "Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>";
				print "Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>";
				print "Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>";
				print "Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>";
				print "Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>";
				print "Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>";
			print "<br>";
			print "<br>";
					print "Grendol:";
			print "<br>";
			print "<br>";
				print "Here are projects based in the Grendol universe:</br>";
				print "</br>";
				print "Grendol: Land of the Orcish Empire: Age of Magic: CCG.</br>";
				print "Grendol: Coliseum: Arena:                         CCG.</br>";
			print "<br>";
			print "<br>";
					print "Utopia:";
			print "<br>";
			print "<br>";
				print "Here are projects based in the Utopia universe:</br>";
				print "</br>";
				print "Avia: Elemental Angels: Adventure game with RPG elements.</br>";
			print "<br>";
			print "<br>";
					print "Elvia:";
			print "<br>";
			print "<br>";
				print "Here are projects based in the Elvia universe:</br>";
				print "</br>";
				print "Nine Card: Tactical card game.</br>";
		
		}
	print "</p>";


}

sub Versions
{
	my $Page = $_[0];

	print "Other versions of this page are here:<br>";
	if($Page <= 0)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/index.html\">HTML</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/index.php\">PHP</a><br>";
		print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/index.html\">HTML Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/index.asp\">ASP Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/index.aspx\">ASP.NET Javascript</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/index.jsp\">JSP</a><br>";
		print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/index.xhtml\">JSF</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/index.cshtml\">ASP.NET Web App</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/index.aspx\">ASP.NET Webform</a><br>";
		print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/index\">ASP.NET MVC App</a><br>";
		print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/index.html\">Apache SSI</a><br>";
		
	}

}

1;