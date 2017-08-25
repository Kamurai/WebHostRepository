sub WriteHeader
{
	##  Writes the header of the webpage

	my $Path = $_[0];
	my $Style = $_[1];

	print "<head>";
		print "<link href='".$Path."' rel='stylesheet' type='text/css'>";
		print "<font color='white'>";
	print "</head>";
}

sub Footer
{
	##  Writes the footer of the webpage

	print "<p id=\"idFooterContent\">";
		print "© Copyright 2012 All rights reserved<br>";
		print "House That Kamurai Built<br>";
	print "</p>";
}

sub GDR
{
	##  Writes the footer of the webpage

	print "<a href='http://htkb.dyndns.org/Downloads/GDR.zip'>You can download my Games Development Report here.</a></br>";

}

sub NavBar
{
	##  Writes the navigation bar of the webpage

	my $Path = $_[0];

	print "<a class=\"navBar\" href='".$Path."Index.shtml'>Home</a>";
	print "<a class=\"navBar\" href='".$Path."Section1/Index.shtml'>Web Programming</a>";
	print "<a class=\"navBar\" href='".$Path."Section2/Index.shtml'>Private Projects</a>";
	print "<a class=\"navBar\" href='".$Path."Section3/Index.shtml'>Downloadable Projects</a>";
}

sub TitlePicture
{
	##  Displays the title picture of the webpage

	my $Path = $_[0];

	print "<img id=\"idLogo\" src='".$Path."logo_HouseThatKamuraiBuilt_blueonblack.jpg'><br>";
}

sub WebMaster
{
	##  Writes the webmaster of the webpage
								
	print "<p id=\"idFooterManagement\">";
		print "Website managed by Kamurai.";
	print "</p>";
}

sub WinRAR
{
	##  Writes the footer of the webpage

	print "<a href='http://htkb.dyndns.org/Downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>";

}

sub Information
{
	##  Writes the Information section of the webpage

	my $Page = $_[0];
	
	print "This page is written using Perl.";
	Versions($Page);
}

sub GetPath
{
	##  Gets the base path based on the level of the webpage

	my $Level = $_[0];

	my $Result = "";


	if($Level <= 0)
	{
		$Result = "./";
	}
	elsif($Level == 1)
	{
		$Result = "../";
	}
	elsif($Level == 2)
	{
		$Result = "../../";
	}
	elsif($Level == 3)
	{
		$Result = "../../../";
	}
	elsif($Level == 4)
	{
		$Result = "../../../../";
	}
	elsif($Level == 5)
	{
		$Result = "../../../../../";
	}
	elsif($Level == 6)
	{
		$Result = "../../../../../../";
	}
	elsif($Level == 7)
	{
		$Result = "../../../../../../../";
	}

	return $Result;
}

1;