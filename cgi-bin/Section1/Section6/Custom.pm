sub Navigation
{
	##  Writes the navigation content of the webpage

	my $Path = $_[0];
	my $DownPath = $_[1];
	
	print "<span class='navlink'>";
		print "<a href='".$Path."Section1/Project1.html'>Basic HTML</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section1/Project1.php'>PHP</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section1/Section2/Index.shtml'>Javascript</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section1/Project3.shtml'>Perl</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section1/Section4/Index.shtml'>Java</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section1/Section5/Index.shtml'>ASP.NET</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section1/Section6/Index.shtml'>Databases</a>";
		print "<h5>";
			print "<span class='navlink'>";
				print "<a href='".$Path."Section1/Section6/Project1.shtml'>Oracle</a>";
			print "</span>";
			print "<span class='navlink'>";
				print "<a href='".$Path."Section1/Section6/Project2.shtml'>MySQL</a>";
			print "</span>";
			print "<span class='navlink'>";
				print "<a href='".$Path."Section1/Section6/Project3.shtml'>Postgres</a>";
			print "</span>";
			print "<span class='navlink'>";
				print "<a href='".$Path."Section1/Section6/Project4.shtml'>XML</a>";
			print "</span>";
		print "</h5>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section1/Project7.shtml'>HTML5</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section1/Project8.shtml'>XSL</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section1/Project9.shtml'>XML DOM</a>";
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
			print "Database Programming";
		}
		elsif($Page == 1)
		{
			print "Oracle Programming";
		}
		elsif($Page == 2)
		{
			print "MySQL Programming";
		}
		elsif($Page == 3)
		{
			print "Postgres Programming";
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
				print "Database Programming";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 1)
	{
		 print "<h2>";
			print "<u>";
				print "Oracle Programming";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 2)
	{
		print "<h2>";
			print "<u>";
				print "MySQL Programming";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 3)
	{
		print "<h2>";
			print "<u>";
				print "Postgres Programming";
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
			print "This section is dedicated to database based programming.";
		}
		elsif($Page == 1)
		{
			print "This section is dedicated to Oracle based programming.";
		}
		elsif($Page == 2)
		{
			print "This section is dedicated to MySQL based programming.";
		}
		elsif($Page == 3)
		{
			print "This section is dedicated to Postgres based programming.";
		}
	print "</p>";

}

1;