sub Navigation
{
	##  Writes the navigation content of the webpage

	my $Path = $_[0];
	my $DownPath = $_[1];
	
	print "<span class='navlink'>";
		print "<a href='".$Path."Section2/Section1/Index.shtml'>Gynowars</a>";
		print "<h5>";
			print "<span class='navlink'>";
				print "<a href='".$Path."Section2/Section1/Project1.shtml'>Gynowars RPG</a>";
			print "</span>";
			print "<span class='navlink'>";
				print "<a href='".$Path."Section2/Section1/Project2.shtml'>Gynowars: Battle Arena CCG</a>";
			print "</span>";
			print "<span class='navlink'>";
				print "<a href='".$Path."Section2/Section1/Project3.shtml'>Gynowars: Crash Ball</a>";
			print "</span>";
		print "</h5>";
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
			print "<u>";
				print "Gynowars";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 1)
	{
		 print "<h2>";
			print "<u>";
				print "Gynowars RPG";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 2)
	{
		 print "<h2>";
			print "<u>";
				print "Gynowars: Battle Arena CCG";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 3)
	{
		 print "<h2>";
			print "<u>";
				print "Gynowars: Crash Ball";
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

1;