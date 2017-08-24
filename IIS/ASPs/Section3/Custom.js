function Navigation(level, extension)
{
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section3/Project1"+GetExtension(extension)+"'>Online Experience Downloads</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section3/Project2"+GetExtension(extension)+"'>Game Maker Downloads</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section3/Project3"+GetExtension(extension)+"'>Java Downloads</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section3/Project4"+GetExtension(extension)+"'>C# Downloads</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section3/Project5"+GetExtension(extension)+"'>C++ Downloads</a>");
	Response.Write("</span>");
	Response.Write("<br>");
}

function Title(input)
{
	Response.Write("<title>");
		if(input == 0)
		{
			Response.Write("Downloadable Projects");
		}
		else if(input == 1)
		{
			Response.Write("Online Experience Downloads");
		}
		else if(input == 2)
		{
			Response.Write("Game Maker Downloads");
		}
		else if(input == 3)
		{
			Response.Write("Java Downloads");
		}
		else if(input == 4)
		{
			Response.Write("C# Downloads");
		}
		else if(input == 5)
		{
			Response.Write("C++ Downloads");
		}
	Response.Write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Downloadable Projects");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 1)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Online Experience Downloads");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 2)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Game Maker Downloads");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 3)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Java Downloads");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 4)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("C# Downloads");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 5)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("C++ Downloads");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
}

function Content(input)
{
	Response.Write("<p align='left'>");
		if(input == 0)
		{
			Response.Write("This section is dedicated to downloadable projects.");
		}
		else if(input == 1)
		{
			Response.Write("Here are downloads to play Minecraft with us:</br>");
			Response.Write("</br>");
			Response.Write("Mo Creatures (Minecraft v1.7.2):<t><a href='http://mocreatures.org/'>Go here to download and manually install Mo Creatures!</a></br>");
			Response.Write("</br>");
			Response.Write("</p>");
			Response.Write("<p align='left'>");
			Response.Write("Here are downloads to play Cube World with us:</br>");
			Response.Write("</br>");
			Response.Write("Cube World:<t><a href='http://htkb.dyndns.org/Section3/downloads/CubeSetup3.exe'>Come play Cube World!</a></br>");
			Response.Write("</br>");
			Response.Write("DirectX:<t><a href='http://htkb.dyndns.org/Section3/downloads/directx_Jun2010_redist.exe'>Direct X Redistrutable</a></br>");
			Response.Write("DirectX 'Web':<t><a href='http://htkb.dyndns.org/Section3/downloads/dxwebsetup.exe'>Direct X Redistrutable</a></br>");
			Response.Write("</br>");
		}
		else if(input == 2)
		{
			Response.Write("Here are Game Maker Projects to play:</br>");
			Response.Write("</br>");
			Response.Write("'Gamebox Client: v5.0':<t><a href='http://htkb.dyndns.org/Section3/downloads/GameBox_Client_Installer_v5p0.exe'>Play games from...well, anywhere.</a></br>");
			Response.Write("'Gamebox Server: v5.0':<t><a href='http://htkb.dyndns.org/Section3/downloads/GameBox_Server_Installer_v5p0.exe'>Host GameBox.</a></br>");
			Response.Write("'A Chess Server':<t><a href='http://htkb.dyndns.org/Section3/downloads/Chess_Server.exe'>Host a Chess game.</a></br>");
			Response.Write("'A Chess Client':<t><a href='http://htkb.dyndns.org/Section3/downloads/Chess_Client.exe'>A game of Chess from anywhere.</a></br>");
			Response.Write("'I Dunno':<t><a href='http://htkb.dyndns.org/Section3/downloads/Idunno.exe'>I dunno, it's a fun puzzle game though.</a></br>");
			Response.Write("'Purification':<t><a href='http://htkb.dyndns.org/Section3/downloads/Zombies.exe'>Kill zombies...lots of zombies.</a></br>");
			Response.Write("'Trail of the Undead: The Way Home':<t><a href='http://htkb.dyndns.org/Section3/downloads/TrailoftheUndead.exe'>An adventure of zombie killing goodness.</a></br>");
			Response.Write("'Discovery' (buggy Alpha):<t><a href='http://htkb.dyndns.org/Section3/downloads/Discovery.exe'>Play a game of discovery and survival.</a></br>");
			Response.Write("'Twisted Tactics: Version 0.1' (buggy Alpha):<t><a href='http://htkb.dyndns.org/Section3/downloads/Tactical.exe'>Scrapped two player tactical system.</a></br>");
			Response.Write("'Skitzo Burrito (Alpha)': <t><a href='http://htkb.dyndns.org/Section3/downloads/Emotive-Default-1.0.0.3.exe'>An emotional platform survival game.</a></br>");
		}
		else if(input == 3)
		{
			Response.Write("Here are Java Programs to download:</br>");
			Response.Write("</br>");
			Response.Write("'Blood Bowl Manager':<t><a href='http://htkb.dyndns.org/Section3/downloads/pichaku.zip'>This is currently not available.</a></br>");
		}
		else if(input == 4)
		{
			Response.Write("Here are C# Programs to download:</br>");
			Response.Write("</br>");
			Response.Write("'Chess Program':<t><a href='http://htkb.dyndns.org/Section3/downloads/pichaku.zip'>This is currently not available.</a></br>");
		}
		else if(input == 5)
		{
			Response.Write("Here are C++ Programs to download:</br>");
			Response.Write("</br>");
			Response.Write("'HTKB Bar Code System':<t><a href='http://htkb.dyndns.org/Section3/downloads/pichaku.zip'>This is currently not available.</a></br>");
		}
	Response.Write("</p>");
}
