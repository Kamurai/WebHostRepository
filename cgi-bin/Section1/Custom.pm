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
		print "<a href='".$Path."Section1/Section5/Index.shtml'>ASP.Net</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section1/Section6/Index.shtml'>Databases</a>";
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
			print "Web Programming";
		}
		elsif($Page == 2)
		{
			print "Javascript Programming";
		}
		elsif($Page == 3)
		{
			print "Perl Programming";
		}
		elsif($Page == 4)
		{
			print "Java Programming";
		}
		elsif($Page == 7)
		{
			print "HTML5 Programming";
		}
		elsif($Page == 8)
		{
			print "XSL Programming";
		}
		elsif($Page == 9)
		{
			print "XML DOM Programming";
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
				print "Web Programming";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 2)
	{
		print "<h2>";
			print "<u>";
				print "Javascript Programming";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 3)
	{
		print "<h2>";
			print "<u>";
				print "Perl Programming";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 4)
	{
		print "<h2>";
			print "<u>";
				print "Java Programming";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 7)
	{
		print "<h2>";
			print "<u>";
				print "HTML5 Programming";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 8)
	{
		print "<h2>";
			print "<u>";
				print "XSL Programming";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 9)
	{
		print "<h2>";
			print "<u>";
				print "XML DOM Programming";
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
			print "This section is dedicated to web-based programming.";
		}
		elsif($Page == 1)
		{
			print "This section is dedicated to Javascript based programming.";
		}
		elsif($Page == 3)
		{
			print "This section is dedicated to Perl based programming.";
		}
		elsif($Page == 4)
		{
			print "This section is dedicated to Java based programming.";
		}
		elsif($Page == 7)
		{
			print "This section is dedicated to HTML5 based programming.";
		}
		elsif($Page == 8)
		{
			print "This section is dedicated to XSL based programming.";
		}
		elsif($Page == 9)
		{
			print "This section is dedicated to XML DOM based programming.";
		}
	print "</p>";

}

1;