exports.Navigation = function (vLevel)
{
    var result = "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"AboutUs\">About Us</a><br/><br/>";
    result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Media\">Media</a><br/><br/>";
    result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Minecraft\">Minecraft!</a><br/><br/>";

    return result;
}

exports.Title = function (vPage)
{
    var result = "<title>";
        if(vPage <= 0)
        {
            result += "HTKB Home Page";
        }
        else if(vPage == 1)
        {
            result += "About Us";
        }
        else if(vPage == 2)
        {
            result += "Media";
        }
        else if(vPage == 3)
        {
            result += "Minecraft!";
        }
    result += "</title>";
    
    return result;
}

exports.Header = function (vPage)
{
    var result = "<h2>";
        if(vPage == 0)
        {
            result += "Welcome to the House That Kamurai Built!";
        }
        else if(vPage == 1)
        {
            result += "About Us";
        }
        else if(vPage == 2)
        {
            result += "Media";
        }
        else if(vPage == 3)
        {
            result += "Minecraft!";
        }
	result += "</h2>";
    
    return result;
}

exports.Content = function (vPage)
{
    var result = "<p id=\"idCenterContent\">";
        if(vPage == 0)
        {
            result += "The House That Kamurai Built is an entertainment company with the primary focus ";
            result += "of increasing awesome by stimulating intelligent conversation and entertainment via discussion and ";
            result += "game design.<br>";
            result += "Increase the Awesome with us!<br>";
        }
        else if(vPage == 1)
        {
            result += "We are working to build this into a better place.</br>";
            result += "If you found this, then you must be at least (Awesome/2).</br>";
            result += "Stay tuned, right now it\"s all about laying foundation for the future.</br>";
        }
        else if(vPage == 2)
        {
            	result += "You can find us at all these different places:</br>";
			result += "<br/>";
			result += "<br/>";
						result += "#WeAreMovieClub:";
			result += "<br/>";
			result += "<br/>";
					result += "<a href=\"http://www.youtube.com/WeAreMovieClub\">Youtube.com/WeAreMovieClub:  A place for movie discussion.</a></br>";
					result += "<a href=\"http://WeAreMovieClub.tumblr.com\">WeAreMovieClub.tumblr.com: We have a tumblr!</a></br>";
					result += "<a href=\"http://www.twitter.com/WeAreMovieClub\">@WeArMovieClub on Twitter: Let us know about your movie thoughts.</a></br>";
					result += "<a href=\"http://www.facebook.com/WeAreMovieClub\">facebook.com/WeAreMovieClub: Talk about movie with us.</a></br>";
			result += "<br/>";
			result += "<br/>";
						result += "HTKB Productions";
			result += "<br/>";
			result += "<br/>";
					result += "<a href=\"http://www.youtube.com/GamingDivision528\">Gaming Division:  A Youtube Channel for game stuff.</a></br>";
					result += "<a href=\"http://www.youtube.com/JamOnToast528\">Jam On Toast:  A Youtube Channel for media stuff.</a></br>";
					result += "<a href=\"http://www.ustream.tv/HTKB\">UStream:  Streams show up here too.</a></br>";
					result += "<a href=\"http://www.firetalk.com/HTKB\">FireTalk:  Streams show up here too.</a></br>";
					result += "<a href=\"http://www.younow.com/HTKB\">YouNow:  Streams show up here too.</a></br>";
					result += "<a href=\"http://www.soundcloud.com/HTKB\">Sound Cloud:  Listen to our podcasts.</a></br>";
					result += "<a href=\"http://HTKB.podbean.com/\">Pod Bean:  Listen to our podcasts.</a></br>";
					result += "<a href=\"http://www.youtube.com/HTKB\">Youtube:  Thoughts and life discussions.</a></br>";
					result += "<a href=\"http://www.patreon.com/HTKBProductions\">Patreon:  You can help make our dreams reality.</a></br>";
					result += "<a href=\"http://www.facebook.com/HouseThatKamuraiBuilt\">Facebook: Talk about movie with us.</a></br>";
					result += "<a href=\"http://HouseThatKamuraiBuilt.tumblr.com\">HouseThatKamuraiBuilt.tumblr.com: We have a tumblr!</a></br>";
					result += "<a href=\"http://myspace.com/HouseThatKamuraiBuilt\">Myspace: Wow, there\"s even a MySpace!</a></br>";
			result += "<br/>";
			result += "<br/>";
				result += "Here are some of our member\"s pages:</br>";
			result += "<br/>";
			result += "<br/>";
					result += "Kamurai:";
			result += "<br/>";
			result += "<br/>";
				result += "<a href=\"http://twitter.com/#!/Kamurai25\">Kamurai\"s Twitter.</a></br>";
				result += "<a href=\"http://Instagram.com/Kamurai25\">Kamurai\"s Instagram.</a></br>";
				result += "<a href=\"./.\">Kamurai\"s Snapchat: Kamurai</a></br>";
				result += "<a href=\"http://www.facebook.com/cris.kamurai\">Kamurai's Facebook.</a></br>";
				result += "<a href=\"https://www.gplus.com/Members/Cris-Kamurai\">Kamurai\"s Google Plus.</a></br>";
				result += "<a href=\"http://www.yoyogames.com/users/Kamurai\">Kamurai\"s YoYo Games page:  See some of the games he\"s posted.</a></br>";
		}
        else if(vPage == 3)
        {
            	result += "If you would like to play Minecraft with us, we have several different servers:</br>";
				result += "Mo Creatures Server: (1.7.10) htkb.dyndns.org:25565</br>";
				result += "Creative Server:     (1.7.10) htkb.dyndns.org:25567</br>";
					result += "This is a list of mods that we are using on the server, compatible with 1.7.10.</br>";
					result += "<a href='./Downloads/Minecraft/forge-1.7.10-10.13.3.1401-1710ls-installer.jar'>Forge 1.7.10</a></br>";
					result += "<a href='./Downloads/Minecraft/DrZharks MoCreatures Mod v6.3.1.zip'>Dr Zhark's Mo Creatures</a></br>";
					result += "<a href='./Downloads/Minecraft/CustomMobSpawner 3.3.0.zip'>Custom Mob Spawner</a></br>";
					result += "<a href='./Downloads/Minecraft/[1.7.10]Gender-1.0.2.jar'>iPixeli's Gender Mod</a></br>";
					result += "<a href='./Downloads/Minecraft/BspkrsCore-1.7.10.jar'>Bspkrs Core</a></br>";
					result += "<a href='./Downloads/Minecraft/[1.7.10]Treecapitator-universal-2.0.4.jar'>Tree Capitator</a></br>";
					result += "<a href='./Downloads/Minecraft/MoarFood-5.8.0.jar'>Moar Food</a></br>";
					result += "<a href='./Downloads/Minecraft/MoarOres-2.4.5.jar'>Moar Ores</a></br>";
					result += "<a href='./Downloads/Minecraft/BiblioCraft[v1.10.4][MC1.7.10].jar'>Biblio Craft</a></br>";
					result += "<a href='./Downloads/Minecraft/Fossils_Archeology_Revival-1.7.10_Build-6.4b.jar'>Fossils and Archaeology</a></br>";
					result += "<a href='./Downloads/Minecraft/Reis-Minimap-Mod-1.7.10.jar'>Rei's Minimap</a></br>";
					result += "<a href='./Downloads/Minecraft/Xaeros_Minimap_1.10.8_Forge_1.7.10.jar'>Xaero's Minimap</a></br>";
				result += "Vanilla Server:      htkb.dyndns.org:25566</br>";
				result += "Here is a skin template to make custom skins:</br>";
				result += "<a href='./Downloads/Minecraft/skin_template.png'>Steve skin template</a></br>";
			result += "<br/>";
			result += "<br/>";
				result += "For first time setups, please follow these steps to make your client compatible with the server:</br>";
					result += " 0) If you don\"t have Minecraft, go to Minecraft.net and download the latest version of the launcher.</br>";
					result += " 1) From the launcher create a new profile and change its version to the relevant version (e.g. 1.7.10).</br>";
					result += " 2) Save the Profile, select the new profile and click play.</br>";
					result += " 3) Exit the program.</br>";
					result += " 4) Install Forge.  If it is not automatically selected, then browse to your .minecraft folder.</br>";
						result += "    Windows: It is in a hidden folder: c:\Users\*Username*\Appdata\Roaming\.minecraft</br>";
						result += "    Mac: \"Go to\" ~/Library/Application Support/minecraft</br>";
					result += " 5) If you are managing multiple non-compatible mods, then you man have to make folders like:</br>";
						result += "    \"..\Roaming\MoCreatures\"</br>";
					result += " 6) If your folder doesn\"t have a /Mods folder, create one. Place the files from the mod list into the /mods folder.</br>";
						result += "    Even if it works, don\"t put two minimap mods in the same folder.</br>";
					result += " 7) Open the Minecraft Launcher, edit your version (e.g. 1.7.10) profile to use the forge version of the same.</br>";
					result += " 8) If you are using a different folder, then remember to change the Game Directory in the profile.</br>";
					result += " 9) Save the Profile, select the new profile and click play.</br>";
					result += "10) You should see the mods listed on the side of the Minecraft window.</br>";
					result += "11) Go to multiplayer and click add server.</br>";
					result += "12) Name the server something distinct and put \"htkb.dyndns.org:2556x\" in the address bar where \"x\" is the relevant port.</br>";
					result += "13) Save the server entry.  You should see a connection to the server.  Double click to join.</br>";
		}
    result += "</p>";
    
    return result;
}

exports.Versions = function (vPage)
{
	var result = "Other versions of this page are here:<br>";
	if(vPage == 0)
	{
		result += "<a href=\"http://htkb.dyndns.org/index.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/index.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/index.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/index.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/index.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/index.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/index.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/index.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/index.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/index\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/index.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/index\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/index\">Ruby On Rails</a><br>";
	}
	else if(vPage == 1)
	{
		result += "<a href=\"http://htkb.dyndns.org/AboutUs.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/AboutUs.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/AboutUs.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/AboutUs.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/AboutUs.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/AboutUs.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/AboutUs.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/AboutUs.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/AboutUs.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/AboutUs\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/AboutUs.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/AboutUs\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/AboutUs\">Ruby On Rails</a><br>";
	}
	else if(vPage == 2)
	{
		result += "<a href=\"http://htkb.dyndns.org/Media.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Media.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Media.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Media.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Media.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Media.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Media.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Media.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Media.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Media\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Media.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Media\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Media\">Ruby On Rails</a><br>";
	}
	else if(vPage == 3)
	{
		result += "<a href=\"http://htkb.dyndns.org/Minecraft.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Minecraft.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Minecraft.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Minecraft.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Minecraft.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Minecraft.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Minecraft.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Minecraft.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Minecraft.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Minecraft\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Minecraft.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Minecraft\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Minecraft\">Ruby On Rails</a><br>";
	}
    
    return result;
}