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
			print "Private Projects";
		}
		elsif($Page == 2)
		{
			print "Assault CCG";
		}
		elsif($Page == 3)
		{
			print "Mars Projects";
		}
		elsif($Page == 7)
		{
			print "Truth";
		}
		elsif($Page == 8)
		{
			print "Kingdoms";
		}
		elsif($Page == 9)
		{
			print "Terminal World";
		}
		elsif($Page == 10)
		{
			print "Monster Office Workplace";
		}
		elsif($Page == 11)
		{
			print "Sacred Offerings";
		}
		elsif($Page == 12)
		{
			print "The Way";
		}
		elsif($Page == 13)
		{
			print "Conspiratorium";
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
				print "Private Projects";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 2)
	{
		print "<h2>";
			print "<u>";
				print "Assault CCG";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 3)
	{
		print "<h2>";
			print "<u>";
				print "Mars Projects";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 7)
	{
		print "<h2>";
			print "<u>";
				print "Truth";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 8)
	{
		print "<h2>";
			print "<u>";
				print "Kingdoms";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 9)
	{
		print "<h2>";
			print "<u>";
				print "Terminal World";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 10)
	{
		print "<h2>";
			print "<u>";
				print "Monster Office Workplace";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 11)
	{
		print "<h2>";
			print "<u>";
				print "Battle Princesses";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 12)
	{
		print "<h2>";
			print "<u>";
				print "Sacred Offerings";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 13)
	{
		print "<h2>";
			print "<u>";
				print "The Way";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 14)
	{
		print "<h2>";
			print "<u>";
				print "Conspiratorium";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 15)
	{
		print "<h2>";
			print "<u>";
				print "Conversion";
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
			print "This section is dedicated to HTKB projects.";
		}
		elsif($Page == 2)
		{
			print "This section is dedicated CCG project \"Assault\".";
		}
		elsif($Page == 3)
		{
			print "This section is dedicated to the Mars centered project \"Opposition\".";
		}
		elsif($Page == 7)
		{
			print "This section is dedicated to the MMO RTS project \"Truth\".  Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries.";
		}
		elsif($Page == 8)
		{
			print "This section is dedicated to the digital board game project \"Kingdoms\".  Explore the world's Kingdoms, get rich, get strong and conquer.";
		}
		elsif($Page == 9)
		{
			print "<p align='left'>";
				print "This section is dedicated to the simulation MMO centered project \"Terminal World\".  This is a virtual environment where a zombie outbreak is about to happen.  Can you beat";
				print "the zombies?  Can you survive?";
			print "</p>";
		}
		elsif($Page == 10)
		{
			print "<p align='left'>";
				print "This section is dedicated to the card and board game project \"Monster Office Workplace\".  These monsters mean serious business.";
				print "Can you earn the most credit and smooze your way into a promotion?";
			print "</p>";
		}
		elsif($Page == 11)
		{
			print "<p align='left'>";
				print "This section is dedicated to the card game project \"Battle Princesses\".  Ever wanted to see your favorite princess battle for the kingdom?";
				print "These princess aren't your helpless maidens, but valiant warriors themselves.";
			print "</p>";
		}
		elsif($Page == 12)
		{
			print "<p align='left'>";
				print "This section is dedicated to the board game project \"Sacred Offerings\".";
				print "Being a god is hard, you have to eat, but don't want to fall out favor with the people more than the other deities.";
				print "Draw people to worship you, but be discerning about who is sacrificed.";
			print "</p>";
		}
		elsif($Page == 13)
		{
			print "<p align='left'>";
				print "This section is dedicated to the card game project \"The Way\".  You seek to find enlightment by contemplating the elements.";
				print "Escape the binds of the world and the board to reach enlightment and win.";
			print "</p>";
		}
		elsif($Page == 14)
		{
			print "<p align='left'>";
				print "This section is dedicated to the board game project \"Conspiratorium\".";
				print "A game of assassins and CIA, you must remember who is friend and who is not.";
			print "</p>";
		}
		elsif($Page == 15)
		{
			print "<p align='left'>";
				print "This section is dedicated to the board game project \"Conversion\".";
				print "Compete on the elemental market by processing elements and becoming the elemental kingpin.";
			print "</p>";
		}
	print "</p>";


}

1;