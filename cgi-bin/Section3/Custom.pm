sub Navigation
{
	##  Writes the navigation content of the webpage

	my $Path = $_[0];
	my $DownPath = $_[1];
	
	print "<span class='navlink'>";
		print "<a href='".$Path."Section3/Project1.shtml'>Online Experience Downloads</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section3/Project2.shtml'>Game Maker Downloads</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section3/Project3.shtml'>Java Downloads</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section3/Project4.shtml'>C# Downloads</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path."Section3/Project5.shtml'>C++ Downloads</a>";
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
			print "Downloadable Projects";
		}
		elsif($Page == 1)
		{
			print "Online Experience Downloads";
		}
		elsif($Page == 2)
		{
			print "Game Maker Downloads";
		}
		elsif($Page == 3)
		{
			print "Java Downloads";
		}
		elsif($Page == 4)
		{
			print "# Downloads";
		}
		elsif($Page == 5)
		{
			print "C++ Downloads";
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
				print "Downloadable Projects";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 1)
	{
		print "<h2>";
			print "<u>";
				print "Online Experience Downloads";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 2)
	{
		print "<h2>";
			print "<u>";
				print "Game Maker Downloads";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 3)
	{
		print "<h2>";
			print "<u>";
				print "Java Downloads";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 4)
	{
		print "<h2>";
			print "<u>";
				print "C# Downloads";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 5)
	{
		print "<h2>";
			print "<u>";
				print "C++ Downloads";
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
        print "This section is dedicated to downloadable projects.";
    }
    elsif($Page == 1)
    {
        print "Here are downloads to play Minecraft with us:</br>";
        print "</br>";
        print "Mo Creatures (Minecraft v1.7.2):<t><a href='http://mocreatures.org/'>Go here to download and manually install Mo Creatures!</a></br>";
        print "</br>";
        print "</p>";
        print "<p align='left'>";
        print "Here are downloads to play Cube World with us:</br>";
        print "</br>";
        print "Cube World:<t><a href='http://htkb.dyndns.org/Downloads/CubeSetup3.exe'>Come play Cube World!</a></br>";
        print "</br>";
        print "DirectX:<t><a href='http://htkb.dyndns.org/Downloads/directx_Jun2010_redist.exe'>Direct X Redistrutable</a></br>";
        print "DirectX 'Web':<t><a href='http://htkb.dyndns.org/Downloads/dxwebsetup.exe'>Direct X Redistrutable</a></br>";
        print "</br>";
    }
    elsif($Page == 2)
    {
        print "Here are Game Maker Projects to play:</br>";
        print "</br>";
        print "'Gamebox Client: v6.0':<t><a href='http://htkb.dyndns.org/Downloads/GameBox_Client_Installer_v6p0.exe'>Play games from...well, anywhere.</a></br>";
        print "'Gamebox Server: v6.0':<t><a href='http://htkb.dyndns.org/Downloads/GameBox_Server_Installer_v6p0.exe'>Host GameBox.</a></br>";
        print "'39dll.dll: v2.5':<t><a href='http://htkb.dyndns.org/Downloads/39dll.dll'>You may need this in your 'user/AppData/Local/GameBox_Client' folder.</a></br>";
		print "'A Chess Server':<t><a href='http://htkb.dyndns.org/Downloads/Chess_Server.exe'>Host a Chess game.</a></br>";
        print "'A Chess Client':<t><a href='http://htkb.dyndns.org/Downloads/Chess_Client.exe'>A game of Chess from anywhere.</a></br>";
        print "'I Dunno':<t><a href='http://htkb.dyndns.org/Downloads/Idunno.exe'>I dunno, it's a fun puzzle game though.</a></br>";
        print "'Purification':<t><a href='http://htkb.dyndns.org/Downloads/Zombies.exe'>Kill zombies...lots of zombies.</a></br>";
        print "'Trail of the Undead: The Way Home':<t><a href='http://htkb.dyndns.org/Downloads/TrailoftheUndead.exe'>An adventure of zombie killing goodness.</a></br>";
        print "'Discovery' (buggy Alpha):<t><a href='http://htkb.dyndns.org/Downloads/Discovery.exe'>Play a game of discovery and survival.</a></br>";
        print "'Twisted Tactics: Version 0.1' (buggy Alpha):<t><a href='http://htkb.dyndns.org/Downloads/Tactical.exe'>Scrapped two player tactical system.</a></br>";
        print "'Skitzo Burrito (Alpha)': <t><a href='http://htkb.dyndns.org/Downloads/Emotive-Default-1.0.0.3.exe'>An emotional platform survival game.</a></br>";
    }
    elsif($Page == 3)
    {
        print "Here are Java Programs to download:</br>";
        print "</br>";
        print "'Blood Bowl Manager':<t><a href='http://htkb.dyndns.org/Downloads/pichaku.zip'>This is currently not available.</a></br>";
    }
    elsif($Page == 4)
    {
        print "Here are C# Programs to download:</br>";
        print "</br>";
        print "'Chess Program':<t><a href='http://htkb.dyndns.org/Downloads/pichaku.zip'>This is currently not available.</a></br>";
    }
    elsif($Page == 5)
    {
        print "<p align='left'>";
            print "Here are C++ Programs to download:</br>";
            print "</br>";
            print "'HTKB Bar Code System':<t><a href='http://htkb.dyndns.org/Downloads/pichaku.zip'>This is currently not available.</a></br>";
        print "</p>";
    }
print "</p>";
}

1;