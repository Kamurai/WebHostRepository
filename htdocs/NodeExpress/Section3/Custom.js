function Navigation(level, extension)
{
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section3/Project1"+GetExtension(extension)+"'>Online Experience Downloads</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section3/Project2"+GetExtension(extension)+"'>Game Maker Downloads</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section3/Project3"+GetExtension(extension)+"'>Java Downloads</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section3/Project4"+GetExtension(extension)+"'>C# Downloads</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section3/Project5"+GetExtension(extension)+"'>C++ Downloads</a>");
	document.write("</span>");
	document.write("<br>");
}

function Title(input)
{
	document.write("<title>");
		if(input == 0)
		{
			document.write("Downloadable Projects");
		}
		else if(input == 1)
		{
			document.write("Online Experience Downloads");
		}
		else if(input == 2)
		{
			document.write("Game Maker Downloads");
		}
		else if(input == 3)
		{
			document.write("Java Downloads");
		}
		else if(input == 4)
		{
			document.write("C# Downloads");
		}
		else if(input == 5)
		{
			document.write("C++ Downloads");
		}
	document.write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Downloadable Projects");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 1)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Online Experience Downloads");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 2)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Game Maker Downloads");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 3)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Java Downloads");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 4)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("C# Downloads");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 5)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("C++ Downloads");
				document.write("</u>");
			document.write("</h2>");
		}
}

function Content(input, level)
{
	document.write("<p align='left'>");
		if(input == 0)
		{
			document.write("This section is dedicated to downloadable projects.");
		}
		else if(input == 1)
		{
			document.write("Here are downloads to play Minecraft with us:</br>");
			document.write("</br>");
			document.write("Mo Creatures (Minecraft v1.7.2):<t><a href='http://mocreatures.org/'>Go here to download and manually install Mo Creatures!</a></br>");
			document.write("</br>");
			document.write("</p>");
			document.write("<p align='left'>");
			document.write("Here are downloads to play Cube World with us:</br>");
			document.write("</br>");
			document.write("Cube World:<t><a href='"+GetPath(level+1)+"/Section3/downloads/CubeSetup3.exe'>Come play Cube World!</a></br>");
			document.write("</br>");
			document.write("DirectX:<t><a href='"+GetPath(level+1)+"/Section3/downloads/directx_Jun2010_redist.exe'>Direct X Redistrutable</a></br>");
			document.write("DirectX 'Web':<t><a href='"+GetPath(level+1)+"/Section3/downloads/dxwebsetup.exe'>Direct X Redistrutable</a></br>");
			document.write("</br>");
		}
		else if(input == 2)
		{
			document.write("Here are Game Maker Projects to play:</br>");
			document.write("</br>");
			document.write("'Gamebox Client: v6.0':<t><a href='"+GetPath(level+1)+"/Section3/downloads/GameBox_Client_Installer_v6p0.exe'>Play games from...well, anywhere.</a></br>");
			document.write("'Gamebox Server: v6.0':<t><a href='"+GetPath(level+1)+"/Section3/downloads/GameBox_Server_Installer_v6p0.exe'>Host GameBox.</a></br>");
			document.write("'39dll.dll: v2.5':<t><a href='"+GetPath(level+1)+"Section3/downloads/39dll.dll'>You may need this in your 'user/AppData/Local/GameBox_Client' folder.</a></br>");
			document.write("'A Chess Server':<t><a href='"+GetPath(level+1)+"/Section3/downloads/Chess_Server.exe'>Host a Chess game.</a></br>");
			document.write("'A Chess Client':<t><a href='"+GetPath(level+1)+"/Section3/downloads/Chess_Client.exe'>A game of Chess from anywhere.</a></br>");
			document.write("'I Dunno':<t><a href='"+GetPath(level+1)+"/Section3/downloads/Idunno.exe'>I dunno, it's a fun puzzle game though.</a></br>");
			document.write("'Purification':<t><a href='"+GetPath(level+1)+"/Section3/downloads/Zombies.exe'>Kill zombies...lots of zombies.</a></br>");
			document.write("'Trail of the Undead: The Way Home':<t><a href='"+GetPath(level+1)+"/Section3/downloads/TrailoftheUndead.exe'>An adventure of zombie killing goodness.</a></br>");
			document.write("'Discovery' (buggy Alpha):<t><a href='"+GetPath(level+1)+"/Section3/downloads/Discovery.exe'>Play a game of discovery and survival.</a></br>");
			document.write("'Twisted Tactics: Version 0.1' (buggy Alpha):<t><a href='"+GetPath(level+1)+"/Section3/downloads/Tactical.exe'>Scrapped two player tactical system.</a></br>");
			document.write("'Skitzo Burrito (Alpha)': <t><a href='"+GetPath(level+1)+"/Section3/downloads/Emotive-Default-1.0.0.3.exe'>An emotional platform survival game.</a></br>");
		}
		else if(input == 3)
		{
			document.write("Here are Java Programs to download:</br>");
			document.write("</br>");
			document.write("'Blood Bowl Manager':<t><a href='."+GetPath(level+1)+"/Section3/downloads/pichaku.zip'>This is currently not available.</a></br>");
		}
		else if(input == 4)
		{
			document.write("Here are C# Programs to download:</br>");
			document.write("</br>");
			document.write("'Chess Program':<t><a href='."+GetPath(level+1)+"/Section3/downloads/pichaku.zip'>This is currently not available.</a></br>");
		}
		else if(input == 5)
		{
			document.write("Here are C++ Programs to download:</br>");
			document.write("</br>");
			document.write("'HTKB Bar Code System':<t><a href='."+GetPath(level+1)+"/Section3/downloads/pichaku.zip'>This is currently not available.</a></br>");
		}
	document.write("</p>");
}
