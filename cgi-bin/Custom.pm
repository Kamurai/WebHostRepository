sub Navigation
{
	##  Writes the navigation content of the webpage

	my $Path = $_[0];
	my $DownPath = $_[1];
	
	print "<span class='navlink'>";
		print "<a href='".$Path.$DownPath."AboutUs.shtml'>About Us</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path.$DownPath."Media.shtml'>Media</a>";
	print "</span>";
	print "<br>";
	print "<span class='navlink'>";
		print "<a href='".$Path.$DownPath."Minecraft.shtml'>Minecraft!</a>";
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
			print "HTKB Home Page";
		}
		elsif($Page == 1)
		{
			print "About Us";
		}
		elsif($Page == 2)
		{
			print "Media";
		}
		elsif($Page == 3)
		{
			print "Minecraft!";
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
				print "Welcome to the House That Kamurai Built!";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 1)
	{
		print "<h2>";
			print "<u>";
				print "About Us";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 2)
	{
		print "<h2>";
			print "<u>";
				print "Media";
			print "</u>";
		print "</h2>";
	}
	elsif($Page == 3)
	{
		print "<h2>";
			print "<u>";
				print "Minecraft!";
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
			print "The House That Kamurai Built is an entertainment company with the primary focus ";
			print "of increasing awesome by stimulating intelligent conversation and entertainment via discussion and ";
			print "game design.<br>";
			print "Increase the Awesome with us!<br>";
		}
		elsif($Page == 1)
		{
			print "We are working to build this into a better place.</br>";
			print "If you found this, then you must be at least (Awesome/2).</br>";
			print "Stay tuned, right now it's all about laying foundation for the future.</br>";
		}
		elsif($Page == 2)
		{
			print "<p align='left'>";
				print "You can find us at all these different places:</br>";
			print "</p>";
			print "<p align='left'>";
				print "<h3>";
					print "<p align='left'>";
						print "#WeAreMovieClub:";
					print "</p>";
				print "</h3>";
				print "<p align='left'>";
					print "<a href='http://www.youtube.com/WeAreMovieClub'>Youtube.com/WeAreMovieClub:  A place for movie discussion.</a></br>";
					print "<a href='http://WeAreMovieClub.tumblr.com'>WeAreMovieClub.tumblr.com: We have a tumblr!</a></br>";
					print "<a href='http://www.twitter.com/WeAreMovieClub'>@WeArMovieClub on Twitter: Let us know about your movie thoughts.</a></br>";
					print "<a href='http://www.facebook.com/WeAreMovieClub'>facebook.com/WeAreMovieClub: Talk about movie with us.</a></br>";
				print "</p>";
				print "<h3>";
					print "<p align='left'>";
						print "HTKB Productions";
					print "</p>";
				print "</h3>";
				print "<p align='left'>";
					print "<a href='http://www.youtube.com/GamingDivision528'>Gaming Division:  A Youtube Channel for game stuff.</a></br>";
					print "<a href='http://www.youtube.com/JamOnToast528'>Jam On Toast:  A Youtube Channel for media stuff.</a></br>";
					print "<a href='http://www.ustream.tv/HTKB'>UStream:  Streams show up here too.</a></br>";
					print "<a href='http://www.firetalk.com/HTKB'>FireTalk:  Streams show up here too.</a></br>";
					print "<a href='http://www.younow.com/HTKB'>YouNow:  Streams show up here too.</a></br>";
					print "<a href='http://www.soundcloud.com/HTKB'>Sound Cloud:  Listen to our podcasts.</a></br>";
					print "<a href='http://HTKB.podbean.com/'>Pod Bean:  Listen to our podcasts.</a></br>";
					print "<a href='http://www.youtube.com/HTKB'>Youtube:  Thoughts and life discussions.</a></br>";
					print "<a href='http://www.patreon.com/HTKBProductions'>Patreon:  You can help make our dreams reality.</a></br>";
					print "<a href='http://www.facebook.com/HouseThatKamuraiBuilt'>Facebook: Talk about movie with us.</a></br>";
					print "<a href='http://HouseThatKamuraiBuilt.tumblr.com'>HouseThatKamuraiBuilt.tumblr.com: We have a tumblr!</a></br>";
					print "<a href='http://myspace.com/HouseThatKamuraiBuilt'>Myspace: Wow, there's even a MySpace!</a></br>";
				print "</p>";
			print "</p>";
			print "<p align='left'>";
				print "Here are some of our member's pages:</br>";
			print "</p>";
			print "<h3>";
				print "<p align='left'>";
					print "Kamurai:";
				print "</p>";
			print "</h3>";
			print "<p align='left'>";
				print "<a href='http://twitter.com/#!/Kamurai25'>Kamurai's Twitter.</a></br>";
				print "<a href='http://Instagram.com/Kamurai25'>Kamurai's Instagram.</a></br>";
				print "<a href='./.'>Kamurai's Snapchat: Kamurai</a></br>";
				print "<a href='http://www.facebook.com/cris.kamurai'>Kamurai's Facebook.</a></br>";
				print "<a href='https://www.gplus.com/Members/Cris-Kamurai'>Kamurai's Google Plus.</a></br>";
				print "<a href='http://www.yoyogames.com/users/Kamurai'>Kamurai's YoYo Games page:  See some of the games he's posted.</a></br>";
			print "</p>";
		}
		elsif($Page == 3)
		{
			print "<p align=\"left\">";
				print "If you would like to play Minecraft with us, we have several different servers:</br>";
				print "Mo Creatures Server: (1.7.10) htkb.dyndns.org:25565</br>";
				print "Creative Server:     (1.7.10) htkb.dyndns.org:25567</br>";
					print "This is a list of mods that we are using on the server, compatible with 1.7.10.</br>";
					print "<a href='./Downloads/Minecraft/forge-1.7.10-10.13.3.1401-1710ls-installer.jar'>Forge 1.7.10</a></br>";
					print "<a href='./Downloads/Minecraft/DrZharks MoCreatures Mod v6.3.1.zip'>Dr Zhark's Mo Creatures</a></br>";
					print "<a href='./Downloads/Minecraft/CustomMobSpawner 3.3.0.zip'>Custom Mob Spawner</a></br>";
					print "<a href='./Downloads/Minecraft/[1.7.10]Gender-1.0.2.jar'>iPixeli's Gender Mod</a></br>";
					print "<a href='./Downloads/Minecraft/BspkrsCore-1.7.10.jar'>Bspkrs Core</a></br>";
					print "<a href='./Downloads/Minecraft/[1.7.10]Treecapitator-universal-2.0.4.jar'>Tree Capitator</a></br>";
					print "<a href='./Downloads/Minecraft/MoarFood-5.8.0.jar'>Moar Food</a></br>";
					print "<a href='./Downloads/Minecraft/MoarOres-2.4.5.jar'>Moar Ores</a></br>";
					print "<a href='./Downloads/Minecraft/BiblioCraft[v1.10.4][MC1.7.10].jar'>Biblio Craft</a></br>";
					print "<a href='./Downloads/Minecraft/Fossils_Archeology_Revival-1.7.10_Build-6.4b.jar'>Fossils and Archaeology</a></br>";
					print "<a href='./Downloads/Minecraft/Reis-Minimap-Mod-1.7.10.jar'>Rei's Minimap</a></br>";
					print "<a href='./Downloads/Minecraft/Xaeros_Minimap_1.10.8_Forge_1.7.10.jar'>Xaero's Minimap</a></br>";
				print "Vanilla Server:      (1.10.2) htkb.dyndns.org:25566</br>";
				print "Come Alive Server:   (1.10.2) htkb.dyndns.org:25568</br>";
					print "This is a list of mods that we are using on the server, compatible with 1.10.2.</br>";
					print "<a href='./Downloads/Minecraft/forge-1.10.2-12.18.1.2011-installer.jar'>Forge 1.10.2</a></br>";
					print "<a href='./Downloads/Minecraft/RadixCore-1.10.2-2.1.2-universal.jar'>Radix Core</a></br>";
					print "<a href='./Downloads/Minecraft/MCA-1.10.2-5.2.1-universal.jar'>Minecraft Comes Alive</a></br>";
					print "<a href='./Downloads/Minecraft/Xaeros_Minimap_1.10.8_Forge_1.10.2.jar'>Xaero's Minimap</a></br>";
				print "Pixelmon Server:     (1.8.9)  htkb.dyndns.org:25569</br>";
					print "This is a list of mods that we are using on the server, compatible with 1.8.9.</br>";
					print "<a href='./Downloads/Minecraft/forge-1.8.9-11.15.1.1902-1.8.9-installer.jar'>Forge 1.8.9</a></br>";
					print "<a href='./Downloads/Minecraft/Pixelmon-1.8.9-4.2.7-universal.jar'>Pixelmon</a></br>";
					print "<a href='./Downloads/Minecraft/Xaeros_Minimap_1.10.8_Forge_1.8.9.jar'>Xaero's Minimap</a></br>";
					print "<a href='./Downloads/Minecraft/PixelExtras-1.8.9-2.1.5-universal.jar'>Pixelmon Extras</a></br>";
				print "ArkCraft Server:     (1.8) htkb.dyndns.org:25570</br>";
					print "This is a list of mods that we are using on the server, compatible with 1.8.</br>";
					print "<a href='./Downloads/Minecraft/forge-1.8-11.14.4.1577-installer.jar'>Forge 1.8</a></br>";
					print "<a href='./Downloads/Minecraft/arkcraft-1.1.3-beta.jar'>Ark Craft</a></br>";
				print "Here is a skin template to make custom skins:</br>";
				print "<a href='./Downloads/Minecraft/skin_template.png'>Steve skin template</a></br>";
			print "</p>";
			print "<p align=\"left\">";
				print "For first time setups, please follow these steps to make your client compatible with the server:</br>";
					print " 0) If you don't have Minecraft, go to Minecraft.net and download the latest version of the launcher.</br>";
					print " 1) From the launcher create a new profile and change its version to the relevant version (e.g. 1.7.10).</br>";
					print " 2) Save the Profile, select the new profile and click play.</br>";
					print " 3) Exit the program.</br>";
					print " 4) Install Forge.  If it is not automatically selected, then browse to your .minecraft folder.</br>";
						print "Windows: It is in a hidden folder: c:\Users\*Username*\Appdata\Roaming\.minecraft</br>";
						print "Mac: \"Go to\" ~/Library/Application Support/minecraft</br>";
					print " 5) If you are managing multiple non-compatible mods, then you man have to make folders like:</br>";
					print "    \"..\Roaming\ComeAlive\"</br>";
					print "    \"..\Roaming\Pixelmon\"</br>";
					print "	   \"..\Roaming\ArkCraft\"</br>";
					print " 6) If your folder doesn't have a /Mods folder, create one. Place the files from the mod list into the /mods folder.</br>";
					print "    Even if it works, don't put two minimap mods in the same folder.</br>";
					print " 7) Open the Minecraft Launcher, edit your version (e.g. 1.7.10) profile to use the forge version of the same.</br>";
					print " 8) If you are using a different folder, then remember to change the Game Directory in the profile.</br>";
					print "    For Pixelmon, then you'll have to change the Java argument -Xmx1G yo -Xmx2G.";
					print " 9) Save the Profile, select the new profile and click play.</br>";
					print "10) You should see the mods listed on the side of the Minecraft window.</br>";
					print "11) Go to multiplayer and click add server.</br>";
					print "12) Name the server something distinct and put \"htkb.dyndns.org:2556x\" in the address bar where \"x\" is the relevant port.</br>";
					print "13) Save the server entry.  You should see a connection to the server.  Double click to join.</br>";
			print "</p>";
		}
	print "</p>";
}

sub Versions
{
	my $Page = $_[0];

	print "<p align='left'>";
		print "Other versions of this page are here:<br>";
		if($Page <= 0)
		{
			print "<a href=\"http://htkb.dyndns.org/index.html\">HTML</a><br>";
			print "<a href=\"http://htkb.dyndns.org/index.php\">PHP</a><br>";
			print "<a href=\"http://htkb.dyndns.org/Javascript/index.html\">HTML Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/ASP/index.asp\">ASP Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/ASPNET/index.aspx\">ASP.NET Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/index.jsp\">JSP</a><br>";
			print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/index.xhtml\">JSF</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/WebApplication/index.cshtml\">ASP.NET Web App</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/WebForm/index.aspx\">ASP.NET Webform</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/index\">ASP.NET MVC App</a><br>";
			print "<a href=\"http://htkb.dyndns.org/SSI/index.html\">Apache SSI</a><br>";
			
		}
		elsif($Page == 1)
		{
			print "<a href=\"http://htkb.dyndns.org/AboutUs.html\">HTML</a><br>";
			print "<a href=\"http://htkb.dyndns.org/AboutUs.php\">PHP</a><br>";
			print "<a href=\"http://htkb.dyndns.org/Javascript/AboutUs.html\">HTML Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/ASP/AboutUs.asp\">ASP Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/ASPNET/AboutUs.aspx\">ASP.NET Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/AboutUs.jsp\">JSP</a><br>";
			print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/AboutUs.xhtml\">JSF</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/WebApplication/AboutUs.cshtml\">ASP.NET Web App</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/WebForm/AboutUs.aspx\">ASP.NET Webform</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/AboutUs\">ASP.NET MVC App</a><br>";
			print "<a href=\"http://htkb.dyndns.org/SSI/AboutUs.html\">Apache SSI</a><br>";
			
		}
		elsif($Page == 2)
		{
			print "<a href=\"http://htkb.dyndns.org/Media.html\">HTML</a><br>";
			print "<a href=\"http://htkb.dyndns.org/Media.php\">PHP</a><br>";
			print "<a href=\"http://htkb.dyndns.org/Javascript/Media.html\">HTML Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/ASP/Media.asp\">ASP Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Media.aspx\">ASP.NET Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Media.jsp\">JSP</a><br>";
			print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Media.xhtml\">JSF</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Media.cshtml\">ASP.NET Web App</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/WebForm/Media.aspx\">ASP.NET Webform</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Media\">ASP.NET MVC App</a><br>";
			print "<a href=\"http://htkb.dyndns.org/SSI/Media.html\">Apache SSI</a><br>";
			
		}
		elsif($Page == 3)
		{
			print "<a href=\"http://htkb.dyndns.org/Minecraft.html\">HTML</a><br>";
			print "<a href=\"http://htkb.dyndns.org/Minecraft.php\">PHP</a><br>";
			print "<a href=\"http://htkb.dyndns.org/Javascript/Minecraft.html\">HTML Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/ASP/Minecraft.asp\">ASP Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Minecraft.aspx\">ASP.NET Javascript</a><br>";
			print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Minecraft.jsp\">JSP</a><br>";
			print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Minecraft.xhtml\">JSF</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Minecraft.cshtml\">ASP.NET Web App</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/WebForm/Minecraft.aspx\">ASP.NET Webform</a><br>";
			print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Minecraft\">ASP.NET MVC App</a><br>";
			print "<a href=\"http://htkb.dyndns.org/SSI/Minecraft.html\">Apache SSI</a><br>";
		}
	print "</p>";
}


1;