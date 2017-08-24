function Navigation(level, extension)
{
    Response.Write("<span class=\"navlink\">");
        Response.Write("<a href=\""+GetPath(level)+"AboutUs"+GetExtension(extension)+"\">About Us</a>");
    Response.Write("</span>");
    Response.Write("<br>");
    Response.Write("<span class=\"navlink\">");
        Response.Write("<a href=\""+GetPath(level)+"Media"+GetExtension(extension)+"\">Media</a>");
    Response.Write("</span>");
    Response.Write("<br>");
    Response.Write("<span class=\"navlink\">");
        Response.Write("<a href=\""+GetPath(level)+"Minecraft"+GetExtension(extension)+"\">Minecraft!</a>");
    Response.Write("</span>");
    Response.Write("<br>");
}

function Title(input)
{
    Response.Write("<title>");
        if(input == 0)
        {
            Response.Write("HTKB Home Page");
        }
        else if(input == 1)
        {
            Response.Write("About Us");
        }
        else if(input == 2)
        {
            Response.Write("Media");
        }
        else if(input == 3)
        {
            Response.Write("Minecraft!");
        }
    Response.Write("</title>");
}

function Header(input)
{
        if(input == 0)
        {
            Response.Write("<h2>");
                Response.Write("<u>");
                    Response.Write("Welcome to the House That Kamurai Built!");
                Response.Write("</u>");
            Response.Write("</h2>");
        }
        else if(input == 1)
        {
            Response.Write("<h2>");
                Response.Write("<u>");
                    Response.Write("About Us");
                Response.Write("</u>");
            Response.Write("</h2>");
        }
        else if(input == 2)
        {
            Response.Write("<h2>");
                Response.Write("<u>");
                    Response.Write("Media");
                Response.Write("</u>");
            Response.Write("</h2>");
        }
        else if(input == 3)
        {
            Response.Write("<h2>");
                Response.Write("<u>");
                    Response.Write("Minecraft!");
                Response.Write("</u>");
            Response.Write("</h2>");
        }
}

function Content(input)
{
    Response.Write("<p align=\"left\">");
        if(input == 0)
        {
            Response.Write("The House That Kamurai Built is an entertainment company with the primary focus ");
            Response.Write("of increasing awesome by stimulating intelligent conversation and entertainment via discussion and ");
            Response.Write("game design.<br>");
            Response.Write("Increase the Awesome with us!<br>");
        }
        else if(input == 1)
        {
            Response.Write("We are working to build this into a better place.</br>");
            Response.Write("If you found this, then you must be at least (Awesome/2).</br>");
            Response.Write("Stay tuned, right now it\"s all about laying foundation for the future.</br>");
        }
        else if(input == 2)
        {
            Response.Write("<p align=\"left\">");
				Response.Write("You can find us at all these different places:</br>");
			Response.Write("</p>");
			Response.Write("<p align=\"left\">");
				Response.Write("<h3>");
					Response.Write("<p align=\"left\">");
						Response.Write("#WeAreMovieClub:");
					Response.Write("</p>");
				Response.Write("</h3>");
				Response.Write("<p align=\"left\">");
					Response.Write("<a href=\"http://www.youtube.com/WeAreMovieClub\">Youtube.com/WeAreMovieClub:  A place for movie discussion.</a></br>");
					Response.Write("<a href=\"http://WeAreMovieClub.tumblr.com\">WeAreMovieClub.tumblr.com: We have a tumblr!</a></br>");
					Response.Write("<a href=\"http://www.twitter.com/WeAreMovieClub\">@WeArMovieClub on Twitter: Let us know about your movie thoughts.</a></br>");
					Response.Write("<a href=\"http://www.facebook.com/WeAreMovieClub\">facebook.com/WeAreMovieClub: Talk about movie with us.</a></br>");
				Response.Write("</p>");
				Response.Write("<h3>");
					Response.Write("<p align=\"left\">");
						Response.Write("HTKB Productions");
					Response.Write("</p>");
				Response.Write("</h3>");
				Response.Write("<p align=\"left\">");
					Response.Write("<a href=\"http://www.youtube.com/GamingDivision528\">Gaming Division:  A Youtube Channel for game stuff.</a></br>");
					Response.Write("<a href=\"http://www.youtube.com/JamOnToast528\">Jam On Toast:  A Youtube Channel for media stuff.</a></br>");
					Response.Write("<a href=\"http://www.ustream.tv/HTKB\">UStream:  Streams show up here too.</a></br>");
					Response.Write("<a href=\"http://www.firetalk.com/HTKB\">FireTalk:  Streams show up here too.</a></br>");
					Response.Write("<a href=\"http://www.younow.com/HTKB\">YouNow:  Streams show up here too.</a></br>");
					Response.Write("<a href=\"http://www.soundcloud.com/HTKB\">Sound Cloud:  Listen to our podcasts.</a></br>");
					Response.Write("<a href=\"http://HTKB.podbean.com/\">Pod Bean:  Listen to our podcasts.</a></br>");
					Response.Write("<a href=\"http://www.youtube.com/HTKB\">Youtube:  Thoughts and life discussions.</a></br>");
					Response.Write("<a href=\"http://www.patreon.com/HTKBProductions\">Patreon:  You can help make our dreams reality.</a></br>");
					Response.Write("<a href=\"http://www.facebook.com/HouseThatKamuraiBuilt\">Facebook: Talk about movie with us.</a></br>");
					Response.Write("<a href=\"http://HouseThatKamuraiBuilt.tumblr.com\">HouseThatKamuraiBuilt.tumblr.com: We have a tumblr!</a></br>");
					Response.Write("<a href=\"http://myspace.com/HouseThatKamuraiBuilt\">Myspace: Wow, there\"s even a MySpace!</a></br>");
				Response.Write("</p>");
			Response.Write("</p>");
			Response.Write("<p align=\"left\">");
				Response.Write("Here are some of our member\"s pages:</br>");
			Response.Write("</p>");
			Response.Write("<h3>");
				Response.Write("<p align=\"left\">");
					Response.Write("Kamurai:");
				Response.Write("</p>");
			Response.Write("</h3>");
			Response.Write("<p align=\"left\">");
				Response.Write("<a href=\"http://twitter.com/#!/Kamurai25\">Kamurai\"s Twitter.</a></br>");
				Response.Write("<a href=\"http://Instagram.com/Kamurai25\">Kamurai\"s Instagram.</a></br>");
				Response.Write("<a href=\"./.\">Kamurai\"s Snapchat: Kamurai</a></br>");
				Response.Write("<a href=\"http://www.facebook.com/cris.kamurai\">Kamurai\"s Facebook.</a></br>");
				Response.Write("<a href=\"https://www.gplus.com/Members/Cris-Kamurai\">Kamurai\"s Google Plus.</a></br>");
				Response.Write("<a href=\"http://www.yoyogames.com/users/Kamurai\">Kamurai\"s YoYo Games page:  See some of the games he\"s posted.</a></br>");
			Response.Write("</p>");
        }
        else if(input == 3)
        {
            Response.Write("<p align=\"left\">");
					Response.Write("If you would like to play Minecraft with us, we have several different servers:</br>");
				Response.Write("Mo Creatures Server: (1.7.10) htkb.dyndns.org:25565</br>");
				Response.Write("Creative Server:     (1.7.10) htkb.dyndns.org:25567</br>");
					Response.Write("This is a list of mods that we are using on the server, compatible with 1.7.10.</br>");
					Response.Write("<a href='./Downloads/Minecraft/forge-1.7.10-10.13.3.1401-1710ls-installer.jar'>Forge 1.7.10</a></br>");
					Response.Write("<a href='./Downloads/Minecraft/DrZharks MoCreatures Mod v6.3.1.zip'>Dr Zhark's Mo Creatures</a></br>");
					Response.Write("<a href='./Downloads/Minecraft/CustomMobSpawner 3.3.0.zip'>Custom Mob Spawner</a></br>");
					Response.Write("<a href='./Downloads/Minecraft/[1.7.10]Gender-1.0.2.jar'>iPixeli's Gender Mod</a></br>");
					Response.Write("<a href='./Downloads/Minecraft/BspkrsCore-1.7.10.jar'>Bspkrs Core</a></br>");
					Response.Write("<a href='./Downloads/Minecraft/[1.7.10]Treecapitator-universal-2.0.4.jar'>Tree Capitator</a></br>");
					Response.Write("<a href='./Downloads/Minecraft/MoarFood-5.8.0.jar'>Moar Food</a></br>");
					Response.Write("<a href='./Downloads/Minecraft/MoarOres-2.4.5.jar'>Moar Ores</a></br>");
					Response.Write("<a href='./Downloads/Minecraft/BiblioCraft[v1.10.4][MC1.7.10].jar'>Biblio Craft</a></br>");
					Response.Write("<a href='./Downloads/Minecraft/Fossils_Archeology_Revival-1.7.10_Build-6.4b.jar'>Fossils and Archaeology</a></br>");
					Response.Write("<a href='./Downloads/Minecraft/Reis-Minimap-Mod-1.7.10.jar'>Rei's Minimap</a></br>");
					Response.Write("<a href='./Downloads/Minecraft/Xaeros_Minimap_1.10.8_Forge_1.7.10.jar'>Xaero's Minimap</a></br>");
				Response.Write("Vanilla Server:      (1.10.2) htkb.dyndns.org:25566</br>");
				Response.Write("Come Alive Server:   (1.10.2) htkb.dyndns.org:25568</br>");
					Response.Write("This is a list of mods that we are using on the server, compatible with 1.10.2.</br>");
					Response.Write("<a href='./Downloads/Minecraft/forge-1.10.2-12.18.1.2011-installer.jar'>Forge 1.10.2</a></br>");
					Response.Write("<a href='./Downloads/Minecraft/RadixCore-1.10.2-2.1.2-universal.jar'>Radix Core</a></br>");
					Response.Write("<a href='./Downloads/Minecraft/MCA-1.10.2-5.2.1-universal.jar'>Minecraft Comes Alive</a></br>");
					Response.Write("<a href='./Downloads/Minecraft/Xaeros_Minimap_1.10.8_Forge_1.10.2.jar'>Xaero's Minimap</a></br>");
				Response.Write("Pixelmon Server:     (1.8.9)  htkb.dyndns.org:25569</br>");
					Response.Write("This is a list of mods that we are using on the server, compatible with 1.8.9.</br>");
					Response.Write("<a href='./Downloads/Minecraft/forge-1.8.9-11.15.1.1902-1.8.9-installer.jar'>Forge 1.8.9</a></br>");
					Response.Write("<a href='./Downloads/Minecraft/Pixelmon-1.8.9-4.2.7-universal.jar'>Pixelmon</a></br>");
					Response.Write("<a href='./Downloads/Minecraft/Xaeros_Minimap_1.10.8_Forge_1.8.9.jar'>Xaero's Minimap</a></br>");
					Response.Write("<a href='./Downloads/Minecraft/PixelExtras-1.8.9-2.1.5-universal.jar'>Pixelmon Extras</a></br>");
				Response.Write("ArkCraft Server:     (1.8) htkb.dyndns.org:25570</br>");
					Response.Write("This is a list of mods that we are using on the server, compatible with 1.8.</br>");
					Response.Write("<a href='./Downloads/Minecraft/forge-1.8-11.14.4.1577-installer.jar'>Forge 1.8</a></br>");
					Response.Write("<a href='./Downloads/Minecraft/arkcraft-1.1.3-beta.jar'>Ark Craft</a></br>");
				Response.Write("Here is a skin template to make custom skins:</br>");
				Response.Write("<a href='./Downloads/Minecraft/skin_template.png'>Steve skin template</a></br>");
			Response.Write("</p>");
			Response.Write("<p align=\"left\">");
				Response.Write("For first time setups, please follow these steps to make your client compatible with the server:</br>");
					Response.Write(" 0) If you don\"t have Minecraft, go to Minecraft.net and download the latest version of the launcher.</br>");
					Response.Write(" 1) From the launcher create a new profile and change its version to the relevant version (e.g. 1.7.10).</br>");
					Response.Write(" 2) Save the Profile, select the new profile and click play.</br>");
					Response.Write(" 3) Exit the program.</br>");
					Response.Write(" 4) Install Forge.  If it is not automatically selected, then browse to your .minecraft folder.</br>");
						Response.Write("Windows: It is in a hidden folder: c:\Users\*Username*\Appdata\Roaming\.minecraft</br>");
						Response.Write("Mac: \"Go to\" ~/Library/Application Support/minecraft</br>");
					Response.Write(" 5) If you are managing multiple non-compatible mods, then you man have to make folders like:</br>");
					Response.Write("    \"..\Roaming\ComeAlive\"</br>");
					Response.Write("    \"..\Roaming\Pixelmon\"</br>");
					Response.Write(" 6) If your folder doesn\"t have a /Mods folder, create one. Place the files from the mod list into the /mods folder.</br>");
					Response.Write("    Even if it works, don\"t put two minimap mods in the same folder.</br>");
					Response.Write(" 7) Open the Minecraft Launcher, edit your version (e.g. 1.7.10) profile to use the forge version of the same.</br>");
					Response.Write(" 8) If you are using a different folder, then remember to change the Game Directory in the profile.</br>");
					Response.Write("    For Pixelmon, then you\"ll have to change the Java argument -Xmx1G yo -Xmx2G.");
					Response.Write(" 9) Save the Profile, select the new profile and click play.</br>");
					Response.Write("10) You should see the mods listed on the side of the Minecraft window.</br>");
					Response.Write("11) Go to multiplayer and click add server.</br>");
					Response.Write("12) Name the server something distinct and put \"htkb.dyndns.org:2556x\" in the address bar where \"x\" is the relevant port.</br>");
					Response.Write("13) Save the server entry.  You should see a connection to the server.  Double click to join.</br>");
			Response.Write("</p>");
			Response.Write("<p align=\"left\">");
				Response.Write("For first time setups, please follow these steps to make your client compatible with the server:</br>");
					Response.Write(" 0) If you don\"t have Minecraft, go to Minecraft.net and download the latest version of the launcher.</br>");
					Response.Write(" 1) From the launcher create a new profile and change its version to the relevant version (e.g. 1.7.10).</br>");
					Response.Write(" 2) Save the Profile, select the new profile and click play.</br>");
					Response.Write(" 3) Exit the program.</br>");
					Response.Write(" 4) Install Forge.  If it is not automatically selected, then browse to your .minecraft folder.</br>");
						Response.Write("Windows: It is in a hidden folder: c:\Users\*Username*\Appdata\Roaming\.minecraft</br>");
						Response.Write("Mac: \"Go to\" ~/Library/Application Support/minecraft</br>");
					Response.Write(" 5) If you are managing multiple non-compatible mods, then you man have to make folders like:</br>");
					Response.Write("    \"..\Roaming\ComeAlive\"</br>");
					Response.Write("    \"..\Roaming\Pixelmon\"</br>");
					Response.Write("    \"..\Roaming\ArkCraft\"</br>");
					Response.Write(" 6) If your folder doesn\"t have a /Mods folder, create one. Place the files from the mod list into the /mods folder.</br>");
					Response.Write("    Even if it works, don\"t put two minimap mods in the same folder.</br>");
					Response.Write(" 7) Open the Minecraft Launcher, edit your version (e.g. 1.7.10) profile to use the forge version of the same.</br>");
					Response.Write(" 8) If you are using a different folder, then remember to change the Game Directory in the profile.</br>");
					Response.Write("    For Pixelmon, then you\"ll have to change the Java argument -Xmx1G yo -Xmx2G.");
					Response.Write(" 9) Save the Profile, select the new profile and click play.</br>");
					Response.Write("10) You should see the mods listed on the side of the Minecraft window.</br>");
					Response.Write("11) Go to multiplayer and click add server.</br>");
					Response.Write("12) Name the server something distinct and put \"htkb.dyndns.org:2556x\" in the address bar where \"x\" is the relevant port.</br>");
					Response.Write("13) Save the server entry.  You should see a connection to the server.  Double click to join.</br>");
			Response.Write("</p>");
		}
    Response.Write("</p>");
}

function Versions(input, extension)
{
    Response.Write("<p align=\"left\">");
		Response.Write("<br><br>");
		Response.Write("Other versions of this page are here:<br>");
		if(input == 0)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org/index.html\">HTML</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/index.php\">PHP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/index.html\">HTML Javascript</a><br>");
			if(extension == 1)
			{
				Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/index.aspx\">ASP.NET Javascript</a><br>");
			}
			else if(extension == 2)
			{
				Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/index.asp\">ASP Javascript</a><br>");
			}
			Response.Write("<a href=\"http://htkb.dyndns.org/index.shtml\">Perl</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/index.jsp\">JSP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/index.xhtml\">JSF</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/index.cshtml\">ASP.NET Web App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/index.aspx\">ASP.NET Webform</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/index\">ASP.NET MVC App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/SSI/index.html\">Apache SSI</a><br>");
		}
		else if(input == 1)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org/AboutUs.html\">HTML</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/AboutUs.php\">PHP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/AboutUs.html\">HTML Javascript</a><br>");
			if(extension == 1)
			{
				Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/AboutUs.aspx\">ASP.NET Javascript</a><br>");
			}
			else if(extension == 2)
			{
				Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/AboutUs.asp\">ASP Javascript</a><br>");
			}
			Response.Write("<a href=\"http://htkb.dyndns.org/AboutUs.shtml\">Perl</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/AboutUs.jsp\">JSP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/AboutUs.xhtml\">JSF</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/AboutUs.cshtml\">ASP.NET Web App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/AboutUs.aspx\">ASP.NET Webform</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/AboutUs\">ASP.NET MVC App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/SSI/AboutUs.html\">Apache SSI</a><br>");
		
		}
		else if(input == 2)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org/Media.html\">HTML</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Media.php\">PHP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Media.html\">HTML Javascript</a><br>");
			if(extension == 1)
			{
				Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Media.aspx\">ASP.NET Javascript</a><br>");
			}
			else if(extension == 2)
			{
				Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Media.asp\">ASP Javascript</a><br>");
			}
			Response.Write("<a href=\"http://htkb.dyndns.org/Media.shtml\">Perl</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Media.jsp\">JSP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Media.xhtml\">JSF</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Media.cshtml\">ASP.NET Web App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Media.aspx\">ASP.NET Webform</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Media\">ASP.NET MVC App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Media.html\">Apache SSI</a><br>");
		
		}
		else if(input == 3)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org/Minecraft.html\">HTML</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Minecraft.php\">PHP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Minecraft.html\">HTML Javascript</a><br>");
			if(extension == 1)
			{
				Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Minecraft.aspx\">ASP.NET Javascript</a><br>");
			}
			else if(extension == 2)
			{
				Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Minecraft.asp\">ASP Javascript</a><br>");
			}
			Response.Write("<a href=\"http://htkb.dyndns.org/Minecraft.shtml\">Perl</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Minecraft.jsp\">JSP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Minecraft.xhtml\">JSF</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Minecraft.cshtml\">ASP.NET Web App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Minecraft.aspx\">ASP.NET Webform</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Minecraft\">ASP.NET MVC App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Minecraft.html\">Apache SSI</a><br>");
		
		}
    Response.Write("</p>");
}
