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
				print "<h5>";
					print "<span class='navlink'>";
						print "<a href='".$Path."Section2/Section5/Section1/Project1.shtml'>Team Tactial: Crash Ball</a>";
					print "</span>";
					print "<span class='navlink'>";
						print "<a href='".$Path."Section2/Section5/Section1/Project2.shtml'>Wars of Antarrea</a>";
					print "</span>";
					print "<span class='navlink'>";
						print "<a href='".$Path."Section2/Section5/Section1/Project3.shtml'>Revolutions: Invading Nations</a>";
					print "</span>";
					print "<span class='navlink'>";
						print "<a href='".$Path."Section2/Section5/Section1/Project4.shtml'>Revolutions: Rebellion Against the Fist</a>";
					print "</span>";
					print "<span class='navlink'>";
						print "<a href='".$Path."Section2/Section5/Section1/Project5.shtml'>Revolutions: Return to Arms</a>";
					print "</span>";
					print "<span class='navlink'>";
						print "<a href='".$Path."Section2/Section5/Section1/Project6.shtml'>Revolutions: Post Wars</a>";
					print "</span>";
				print "</h5>";
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
			print "<u>";
				print "Global Antarrea";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 1)
	{
		 print "<h2>";
			print "<u>";
				print "Team Tactical: Crash Ball";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 2)
	{
		 print "<h2>";
			print "<u>";
				print "Wars of Antarrea";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 3)
	{
		 print "<h2>";
			print "<u>";
				print "Revolutions: Invading Nations";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 4)
	{
		 print "<h2>";
			print "<u>";
				print "Revolutions: Rebellion Against the Fist";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 5)
	{
		 print "<h2>";
			print "<u>";
				print "Revolutions: Return to Arms";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 6)
	{
		 print "<h2>";
			print "<u>";
				print "Revolutions: Post Wars";
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

1;