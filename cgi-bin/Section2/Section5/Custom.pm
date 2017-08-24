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
			print "<u>";
				print "Antarrea Projects";
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
			print "<h3>";
				print "<p align='left'>";
					print "Global:";
				print "</p>";
			print "</h3>";
			print "<p align='left'>";
				print "Here are projects based in the Antarrea universe:</br>";
				print "</br>";
				print "Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>";
				print "Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>";
				print "Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>";
				print "Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>";
				print "Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>";
				print "Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>";
			print "</p>";
			print "<h3>";
				print "<p align='left'>";
					print "Grendol:";
				print "</p>";
			print "</h3>";
			print "<p align='left'>";
				print "Here are projects based in the Grendol universe:</br>";
				print "</br>";
				print "Grendol: Land of the Orcish Empire: Age of Magic: CCG.</br>";
				print "Grendol: Coliseum: Arena:                         CCG.</br>";
			print "</p>";
			print "<h3>";
				print "<p align='left'>";
					print "Utopia:";
				print "</p>";
			print "</h3>";
			print "<p align='left'>";
				print "Here are projects based in the Utopia universe:</br>";
				print "</br>";
				print "Avia: Elemental Angels: Adventure game with RPG elements.</br>";
			print "</p>";
			print "<h3>";
				print "<p align='left'>";
					print "Elvia:";
				print "</p>";
			print "</h3>";
			print "<p align='left'>";
				print "Here are projects based in the Elvia universe:</br>";
				print "</br>";
				print "Nine Card: Tactical card game.</br>";
			print "</p>";
		}
	print "</p>";


}

1;