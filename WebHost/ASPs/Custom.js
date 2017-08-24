function Navigation(level, extension)
{
    Response.Write("<span class='navlink'>");
        Response.Write("<a href='"+GetPath(level)+"AboutUs"+GetExtension(extension)+"'>About Us</a>");
    Response.Write("</span>");
    Response.Write("<br>");
    Response.Write("<span class='navlink'>");
        Response.Write("<a href='"+GetPath(level)+"Affiliation"+GetExtension(extension)+"'>HTKB Affiliations</a>");
    Response.Write("</span>");
    Response.Write("<br>");
    Response.Write("<span class='navlink'>");
        Response.Write("<a href='"+GetPath(level)+"Minecraft"+GetExtension(extension)+"'>Minecraft!</a>");
    Response.Write("</span>");
    Response.Write("<br>");
    Response.Write("<span class='navlink'>");
        Response.Write("<a href='"+GetPath(level)+"PublicProjects"+GetExtension(extension)+"'>Public Projects</a>");
    Response.Write("</span>");
    Response.Write("<br>");
    Response.Write("<span class='navlink'>");
        Response.Write("<a href='"+GetPath(level)+"MemberPages"+GetExtension(extension)+"'>Member Pages</a>");
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
            Response.Write("HTKB Affiliation");
        }
        else if(input == 2)
        {
            Response.Write("About Us");
        }
        else if(input == 3)
        {
            Response.Write("Minecraft!");
        }
        else if(input == 4)
        {
            Response.Write("HTKB Public Projects");
        }
        else if(input == 5)
        {
            Response.Write("Member Pages");
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
                    Response.Write("HTKB Affiliation");
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
        else if(input == 4)
        {
            Response.Write("<h2>");
                Response.Write("<u>");
                    Response.Write("HTKB Public Projects");
                Response.Write("</u>");
            Response.Write("</h2>");
        }
        else if(input == 5)
        {
            Response.Write("<h2>");
                Response.Write("<u>");
                    Response.Write("Member Pages");
                Response.Write("</u>");
            Response.Write("</h2>");
            Response.Write("<p align='left'>");
                Response.Write("Here are some of our member's pages:</br>");
            Response.Write("</p>");
        }
}

function Content(input)
{
    Response.Write("<p align='left'>");
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
            Response.Write("Stay tuned, right now it's all about laying foundation for the future.</br>");
        }
        else if(input == 2)
        {
            Response.Write("Here is a list of other HTKB affiliated webpages:</br>");
            Response.Write("</br>");
            Response.Write("<a href='http://www.facebook.com/HouseThatKamuraiBuilt'>House That Kamurai Built Facebook.</a></br>");
            Response.Write("<a href='http://www.youtube.com/HTKB'>House That Kamurai Built Youtube.</a></br>");
            Response.Write("<a href='http://www.tumblr.com/blog/housethatkamuraibuilt'>House That Kamurai Built's Tumblr.</a></br>");
            //Response.Write("<a href='http://housethatkamuraibuilt.webs.com/'>House That Kamurai Built's Webs Account.</a></br>");
            Response.Write("<a href='http://myspace.com/housethatkamuraibuilt'>House That Kamurai Built's Myspace.</a></br>");
            
        }
        else if(input == 3)
        {
            Response.Write("<p align='left'>");
				Response.Write("If you would like to play Minecraft with us, then you're welcome to join us here:</br>");
				Response.Write("htkb.dyndns.org:25565</br>");
				Response.Write("The server is running Minecraft version 1.7.10.</br>");
				Response.Write("This is a list of mods that we are using on the server, compatible with 1.7.10.</br>");
				Response.Write("<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/forge-1.7.10-10.13.2.1236-installer.jar'>Forge</a></br>");
				Response.Write("<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/DrZharks MoCreatures Mod v6.3.1.zip'>Dr Zhark's Mo Creatures</a></br>");
				Response.Write("<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/CustomMobSpawner 3.3.0.zip'>Custom Mob Spawner</a></br>");
				Response.Write("<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/Reis-Minimap-Mod-1.7.10.jar'>Rei's Minimap</a></br>");
				Response.Write("<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/[1.7.10]Gender-1.0.2.jar'>iPixeli's Gender Mod</a></br>");
                Response.write("<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/BspkrsCore-1.7.10.jar'>Bspkrs Core</a></br>");
                Response.write("<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/[1.7.10]Treecapitator-universal-2.0.4.jar'>Tree Capitator</a></br>");
                Response.write("<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/MoarFood-5.8.0.jar'>Moar Food</a></br>");
                Response.write("<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/MoarOres-2.4.5.jar'>Moar Ores</a></br>");
                Response.write("<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/BiblioCraft[v1.10.4][MC1.7.10].jar'>Biblio Craft</a></br>");
                Response.Write("<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/skin_template.png'>Steve skin template</a></br>");
			Response.Write("</p>");
			Response.Write("<p align='left'>");
				Response.Write("For first time setups, please follow these steps to make your client compatible with the server:</br>");
				Response.Write(" 0) If you don't have Minecraft, go to Minecraft.net and download the latest version of the launcher.</br>");
				Response.Write(" 1) From the launcher create a new profile and change its version to 1.7.10.</br>");
				Response.Write(" 2) Save the Profile, select the new profile and click play.</br>");
				Response.Write(" 3) Exit the program.</br>");
				Response.Write(" 4) Install Forge.  If it is not automatically selected, then browse to your .minecraft folder.</br>");
				Response.Write("	Windows: It is in a hidden folder: c:\Users\*Username*\Appdata\Roaming\.minecraft");
				Response.Write("	Mac: 'Go to' ~/Library/Application Support/minecraft");
                Response.Write(" 5) Place the Mo Creatures, Custom Mob Spawner, iPixeli's Gender Mod, Bspkers Core, Tree Capitator, Moar Food, Moar Ores, Biblio Craft and Rei's Minimap files into .minecraft/mods.  You may have to make the mods folder.</br>");
				Response.Write(" 6) Open the Minecraft Launcher, edit your 1.7.10 profile to use the forge version of 1.7.10.</br>");
				Response.Write(" 7) Save the Profile, select the new profile and click play.</br>");
				Response.Write(" 8) You should see the mods listed on the side of the Minecraft window.</br>");
				Response.Write(" 9) Go to multiplayer and click add server.</br>");
				Response.Write("10) Name the server something distinct and put 'htkb.dyndns.org' or 'htkb.dyndns.org:25565' in the address bar.</br>");
				Response.Write("11) Save the server entry.  You should see a connection to the server.  Double click to join.</br>");
			Response.Write("</p>");
		}
        else if(input == 4)
        {
            Response.Write("If you would like to join in the effort to be awesome, then here are some HTKB associated projects:</br>");
            Response.Write("</br>");
            Response.Write("<a href='http://www.youtube.com/WeAreMovieClub'>We Are Movie Club:  A Youtube Channel for media reviews.</a></br>");
            Response.Write("<a href='http://www.youtube.com/GamingDivision528'>Gaming Division:  A Youtube Channel for game stuff.</a></br>");
        }
        else if(input == 5)
        {
            Response.Write("<h3>");
                Response.Write("<p align='left'>");
                    Response.Write("Kamurai:");
                Response.Write("</p>");
            Response.Write("</h3>");
            Response.Write("<p align='left'>");
                Response.Write("<a href='http://www.yoyogames.com/users/Kamurai'>Kamurai's YoYo Games page:  See some of the games he's posted.</a></br>");
                Response.Write("<a href='http://www.facebook.com/cris.kamurai'>Kamurai's Facebook.</a></br>");
                Response.Write("<a href='http://twitter.com/#!/Kamurai25'>Kamurai's Twitter.</a></br>");
                Response.Write("<a href='https://www.gplus.com/Members/Cris-Kamurai'>Kamurai's Google Plus.</a></br>");
            Response.Write("</p>");
        }
    Response.Write("</p>");
}
