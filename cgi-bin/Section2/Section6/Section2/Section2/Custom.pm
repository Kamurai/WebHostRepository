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
		print "<h5>";
			print "<span class='navlink'>";
				print "<a href='".$Path."Section2/Section6/Project1.shtml'>Magic: The Tactical</a>";
			print "</span>";
			print "<span class='navlink'>";
				print "<a href='".$Path."Section2/Section6/Section2/Index.shtml'>Warhammer 40K</a>";
				print "<h5>";
					print "<span class='navlink'>";
						print "<a href='".$Path."Section2/Section6/Section2/Project1.shtml'>Mission!</a>";
					print "</span>";
					print "<span class='navlink'>";
						print "<a href='".$Path."Section2/Section6/Section2/Section2/Index.shtml'>HTKB Armies</a>";
						print "<h5>";
							print "<span class='navlink'>";
								print "<a href='".$Path."Section2/Section6/Section2/Section2/Project1.shtml'>Ad Infinitum</a>";
							print "</span>";
							print "<span class='navlink'>";
								print "<a href='".$Path."Section2/Section6/Section2/Section2/Project2.shtml'>Avia</a>";
							print "</span>";
							print "<span class='navlink'>";
								print "<a href='".$Path."Section2/Section6/Section2/Section2/Project3.shtml'>De Luna</a>";
							print "</span>";
							print "<span class='navlink'>";
								print "<a href='".$Path."Section2/Section6/Section2/Section2/Project4.shtml'>Eve</a>";
							print "</span>";
							print "<span class='navlink'>";
								print "<a href='".$Path."Section2/Section6/Section2/Section2/Project5.shtml'>Geo Marines</a>";
							print "</span>";
							print "<span class='navlink'>";
								print "<a href='".$Path."Section2/Section6/Section2/Section2/Project6.shtml'>Twin Fists</a>";
							print "</span>";
							print "<span class='navlink'>";
								print "<a href='".$Path."Section2/Section6/Section2/Section2/Project7.shtml'>Voboulids</a>";
							print "</span>";
							print "<span class='navlink'>";
								print "<a href='".$Path."Section2/Section6/Section2/Section2/Project8.shtml'>Fungi</a>";
							print "</span>";
							print "<span class='navlink'>";
								print "<a href='".$Path."Section2/Section6/Section2/Section2/Project9.shtml'>Synergy</a>";
							print "</span>";
							print "<span class='navlink'>";
								print "<a href='".$Path."Section2/Section6/Section2/Section2/Project10.shtml'>The Dark</a>";
							print "</span>";
							print "<span class='navlink'>";
								print "<a href='".$Path."Section2/Section6/Section2/Section2/Project11.shtml'>Vivus Mortem</a>";
							print "</span>";
					   print "</h5>";
					print "</span>";
				print "</h5>";
			print "</span>";
		print "</h5>";
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
			print "<u>";
				print "HTKB Armies";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 1)
	{
		 print "<h2>";
			print "<u>";
				print "Ad Infinitum";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 2)
	{
		 print "<h2>";
			print "<u>";
				print "Avia";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 3)
	{
		 print "<h2>";
			print "<u>";
				print "De Luna";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 4)
	{
		 print "<h2>";
			print "<u>";
				print "Eve";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 5)
	{
		 print "<h2>";
			print "<u>";
				print "Geo Marines";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 6)
	{
		 print "<h2>";
			print "<u>";
				print "Twin Fists";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 7)
	{
		 print "<h2>";
			print "<u>";
				print "Voboulids";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 8)
	{
		 print "<h2>";
			print "<u>";
				print "Fungi";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 9)
	{
		 print "<h2>";
			print "<u>";
				print "Synergy";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 10)
	{
		 print "<h2>";
			print "<u>";
				print "The Dark";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 11)
	{
		 print "<h2>";
			print "<u>";
				print "Vivus Mortem";
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

1;