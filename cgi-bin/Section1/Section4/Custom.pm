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
		print "<a href='".$Path."Section1/Section4/Index.html'>Java</a>";
		print "<h5>";
			print "<span class='navlink'>";
				print "<a href='http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/Project1.jsp'>JSP Programming</a>";
			print "</span>";
			print "<span class='navlink'>";
				print "<a href='http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/Project2.xhtml'>JSF Programming</a>";
			print "</span>";
		print "</h5>";
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
			print "Java Programming";
		}
		if($Page == 1)
		{
			print "JSP Programming";
		}
		if($Page == 2)
		{
			print "JSF Programming";
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
				print "Java Programming";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 1)
	{
		print "<h2>";
			print "<u>";
				print "JSP Programming";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 2)
	{
		print "<h2>";
			print "<u>";
				print "JSF Programming";
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
			print "This section is dedicated to Java based programming.";
		}
		elsif($Page == 1)
		{
			print "This section is dedicated to JSP based programming.";
		}
		elsif($Page == 2)
		{
			print "This section is dedicated to JSF based programming.";
		}
	print "</p>";

}

1;