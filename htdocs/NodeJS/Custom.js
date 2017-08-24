function Navigation(level, extension)
{
    document.write("<span class='navlink'>");
        document.write("<a href='"+GetPath(level)+"AboutUs"+GetExtension(extension)+"'>About Us</a>");
    document.write("</span>");
    document.write("<br>");
    document.write("<span class='navlink'>");
        document.write("<a href='"+GetPath(level)+"Media"+GetExtension(extension)+"'>Media</a>");
    document.write("</span>");
    document.write("<br>");
    document.write("<span class='navlink'>");
        document.write("<a href='"+GetPath(level)+"Minecraft"+GetExtension(extension)+"'>Minecraft!</a>");
    document.write("</span>");
    document.write("<br>");
}

function Title(input)
{
    document.write("<title>");
        if(input <= 0)
        {
            document.write("HTKB Home Page");
        }
        else if(input == 1)
        {
            document.write("About Us");
        }
        else if(input == 2)
        {
            document.write("Media");
        }
        else if(input == 3)
        {
            document.write("Minecraft!");
        }
    document.write("</title>");
}

function Header(input)
{
        if(input == 0)
        {
            document.write("<h2>");
                document.write("<u>");
                    document.write("Welcome to the House That Kamurai Built!");
                document.write("</u>");
            document.write("</h2>");
        }
        else if(input == 1)
        {
            document.write("<h2>");
                document.write("<u>");
                    document.write("About Us");
                document.write("</u>");
            document.write("</h2>");
        }
        else if(input == 2)
        {
            document.write("<h2>");
                document.write("<u>");
                    document.write("Media");
                document.write("</u>");
            document.write("</h2>");
        }
        else if(input == 3)
        {
            document.write("<h2>");
                document.write("<u>");
                    document.write("Minecraft!");
                document.write("</u>");
            document.write("</h2>");
        }
}

function Content(input)
{
    document.write("<p align='left'>");
        if(input == 0)
        {
            document.write("The House That Kamurai Built is an entertainment company with the primary focus ");
            document.write("of increasing awesome by stimulating intelligent conversation and entertainment via discussion and ");
            document.write("game design.<br>");
            document.write("Increase the Awesome with us!<br>");
        }
        else if(input == 1)
        {
            document.write("We are working to build this into a better place.</br>");
            document.write("If you found this, then you must be at least (Awesome/2).</br>");
            document.write("Stay tuned, right now it's all about laying foundation for the future.</br>");
        }
        else if(input == 2)
        {
            document.write("<p align='left'>");
				document.write("You can find us at all these different places:</br>");
			document.write("</p>");
			document.write("<p align='left'>");
				document.write("<h3>");
					document.write("<p align='left'>");
						document.write("#WeAreMovieClub:");
					document.write("</p>");
				document.write("</h3>");
				document.write("<p align='left'>");
					document.write("<a href='http://www.youtube.com/WeAreMovieClub'>Youtube.com/WeAreMovieClub:  A place for movie discussion.</a></br>");
					document.write("<a href='http://WeAreMovieClub.tumblr.com'>WeAreMovieClub.tumblr.com: We have a tumblr!</a></br>");
					document.write("<a href='http://www.twitter.com/WeAreMovieClub'>@WeArMovieClub on Twitter: Let us know about your movie thoughts.</a></br>");
					document.write("<a href='http://www.facebook.com/WeAreMovieClub'>facebook.com/WeAreMovieClub: Talk about movie with us.</a></br>");
				document.write("</p>");
				document.write("<h3>");
					document.write("<p align='left'>");
						document.write("HTKB Productions");
					document.write("</p>");
				document.write("</h3>");
				document.write("<p align='left'>");
					document.write("<a href='http://www.youtube.com/GamingDivision528'>Gaming Division:  A Youtube Channel for game stuff.</a></br>");
					document.write("<a href='http://www.youtube.com/JamOnToast528'>Jam On Toast:  A Youtube Channel for media stuff.</a></br>");
					document.write("<a href='http://www.ustream.tv/HTKB'>UStream:  Streams show up here too.</a></br>");
					document.write("<a href='http://www.firetalk.com/HTKB'>FireTalk:  Streams show up here too.</a></br>");
					document.write("<a href='http://www.younow.com/HTKB'>YouNow:  Streams show up here too.</a></br>");
					document.write("<a href='http://www.soundcloud.com/HTKB'>Sound Cloud:  Listen to our podcasts.</a></br>");
					document.write("<a href='http://HTKB.podbean.com/'>Pod Bean:  Listen to our podcasts.</a></br>");
					document.write("<a href='http://www.youtube.com/HTKB'>Youtube:  Thoughts and life discussions.</a></br>");
					document.write("<a href='http://www.patreon.com/HTKBProductions'>Patreon:  You can help make our dreams reality.</a></br>");
					document.write("<a href='http://www.facebook.com/HouseThatKamuraiBuilt'>Facebook: Talk about movie with us.</a></br>");
					document.write("<a href='http://HouseThatKamuraiBuilt.tumblr.com'>HouseThatKamuraiBuilt.tumblr.com: We have a tumblr!</a></br>");
					document.write("<a href='http://myspace.com/HouseThatKamuraiBuilt'>Myspace: Wow, there's even a MySpace!</a></br>");
				document.write("</p>");
			document.write("</p>");
			document.write("<p align='left'>");
				document.write("Here are some of our member's pages:</br>");
			document.write("</p>");
			document.write("<h3>");
				document.write("<p align='left'>");
					document.write("Kamurai:");
				document.write("</p>");
			document.write("</h3>");
			document.write("<p align='left'>");
				document.write("<a href='http://twitter.com/#!/Kamurai25'>Kamurai's Twitter.</a></br>");
				document.write("<a href='http://Instagram.com/Kamurai25'>Kamurai's Instagram.</a></br>");
				document.write("<a href='./.'>Kamurai's Snapchat: Kamurai</a></br>");
				document.write("<a href='http://www.facebook.com/cris.kamurai'>Kamurai's Facebook.</a></br>");
				document.write("<a href='https://www.gplus.com/Members/Cris-Kamurai'>Kamurai's Google Plus.</a></br>");
				document.write("<a href='http://www.yoyogames.com/users/Kamurai'>Kamurai's YoYo Games page:  See some of the games he's posted.</a></br>");
			document.write("</p>");
        }
        else if(input == 3)
        {
            document.write("<p align='left'>");
				document.write("If you would like to play Minecraft with us, then you're welcome to join us here:</br>");
				document.write("htkb.dyndns.org:25565</br>");
				document.write("The server is running Minecraft version 1.7.10.</br>");
				document.write("This is a list of mods that we are using on the server, compatible with 1.7.10.</br>");
				document.write("<a href='../Section3/Downloads/Minecraft/forge-1.7.10-10.13.2.1236-installer.jar'>Forge</a></br>");
				document.write("<a href='../Section3/Downloads/Minecraft/DrZharks MoCreatures Mod v6.3.1.zip'>Dr Zhark's Mo Creatures</a></br>");
				document.write("<a href='../Section3/Downloads/Minecraft/CustomMobSpawner 3.3.0.zip'>Custom Mob Spawner</a></br>");
				document.write("<a href='../Section3/Downloads/Minecraft/Reis-Minimap-Mod-1.7.10.jar'>Rei's Minimap</a></br>");
				document.write("<a href='../Section3/Downloads/Minecraft/[1.7.10]Gender-1.0.2.jar'>iPixeli's Gender Mod</a></br>");
                document.write("<a href='../Section3/Downloads/Minecraft/BspkrsCore-1.7.10.jar'>Bspkrs Core</a></br>");
                document.write("<a href='../Section3/Downloads/Minecraft/[1.7.10]Treecapitator-universal-2.0.4.jar'>Tree Capitator</a></br>");
                document.write("<a href='../Section3/Downloads/Minecraft/MoarFood-5.8.0.jar'>Moar Food</a></br>");
                document.write("<a href='../Section3/Downloads/Minecraft/MoarOres-2.4.5.jar'>Moar Ores</a></br>");
                document.write("<a href='../Section3/Downloads/Minecraft/BiblioCraft[v1.10.4][MC1.7.10].jar'>Biblio Craft</a></br>");
                document.write("<a href='../Section3/Downloads/Minecraft/skin_template.png'>Steve skin template</a></br>");
			document.write("</p>");
			document.write("<p align='left'>");
				document.write("For first time setups, please follow these steps to make your client compatible with the server:</br>");
				document.write(" 0) If you don't have Minecraft, go to Minecraft.net and download the latest version of the launcher.</br>");
				document.write(" 1) From the launcher create a new profile and change its version to 1.7.10.</br>");
				document.write(" 2) Save the Profile, select the new profile and click play.</br>");
				document.write(" 3) Exit the program.</br>");
				document.write(" 4) Install Forge.  If it is not automatically selected, then browse to your .minecraft folder.</br>");
				document.write("	Windows: It is in a hidden folder: c:\Users\*Username*\Appdata\Roaming\.minecraft</br>");
				document.write("	Mac: 'Go to' ~/Library/Application Support/minecraft</br>");
                document.write(" 5) Place the Mo Creatures, Custom Mob Spawner, iPixeli's Gender Mod, Bspkers Core, Tree Capitator, Moar Food, Moar Ores, Biblio Craft and Rei's Minimap files into .minecraft/mods.  You may have to make the mods folder.</br>");
				document.write(" 6) Open the Minecraft Launcher, edit your 1.7.10 profile to use the forge version of 1.7.10.</br>");
				document.write(" 7) Save the Profile, select the new profile and click play.</br>");
				document.write(" 8) You should see the mods listed on the side of the Minecraft window.</br>");
				document.write(" 9) Go to multiplayer and click add server.</br>");
				document.write("10) Name the server something distinct and put 'htkb.dyndns.org' or 'htkb.dyndns.org:25565' in the address bar.</br>");
				document.write("11) Save the server entry.  You should see a connection to the server.  Double click to join.</br>");
			document.write("</p>");
        }
    document.write("</p>");
}
