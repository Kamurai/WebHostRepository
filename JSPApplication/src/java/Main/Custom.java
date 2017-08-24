package Main;

public class Custom
{
    Universal bob;

    public Custom()
    {
        bob = new Universal();
    }

    public String Navigation(int level, int extension)
    {
        String Result = "";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"AboutUs"+bob.GetExtension(extension)+"'>About Us</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Affiliation"+bob.GetExtension(extension)+"'>HTKB Affiliations</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Minecraft"+bob.GetExtension(extension)+"'>Minecraft!</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"PublicProjects"+bob.GetExtension(extension)+"'>Public Projects</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"MemberPages"+bob.GetExtension(extension)+"'>Member Pages</a>";
        Result += "</span>";
        Result += "<br>";
        return Result;
    }

    public String Title(int input)
    {
        String Result = "";
        Result += "<title>";
            if(input == 0)
            {
                Result += "HTKB Home Page";
            }
            else if(input == 1)
            {
                Result += "HTKB Affiliation";
            }
            else if(input == 2)
            {
                Result += "About Us";
            }
            else if(input == 3)
            {
                Result += "Minecraft!";
            }
            else if(input == 4)
            {
                Result += "HTKB Public Projects";
            }
            else if(input == 5)
            {
                Result += "Member Pages";
            }
        Result += "</title>";
        return Result;
    }

    public String Header(int input)
    {
        String Result = "";
        if(input == 0)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Welcome to the House That Kamurai Built!";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 1)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "About Us";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 2)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "HTKB Affiliation";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 3)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Minecraft!";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 4)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "HTKB Public Projects";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 5)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Member Pages";
                Result += "</u>";
            Result += "</h2>";
            Result += "<p align='left'>";
                Result += "Here are some of our member's pages:</br>";
            Result += "</p>";
        }
        return Result;
    }

    public String Content(int input)
    {
        String Result = "";
        Result += "<p align='left'>";
            if(input == 0)
            {
                Result += "The House That Kamurai Built is an entertainment company with the primary focus ";
                Result += "of increasing awesome by stimulating intelligent conversation and entertainment via discussion and ";
                Result += "game design.<br>";
                Result += "Increase the Awesome with us!<br>";
            }
            else if(input == 1)
            {
                Result += "We are working to build this into a better place.</br>";
                Result += "If you found this, then you must be at least (Awesome/2).</br>";
                Result += "Stay tuned, right now it's all about laying foundation for the future.</br>";
            }
            else if(input == 2)
            {
                Result += "Here is a list of other HTKB affiliated webpages:</br>";
                Result += "</br>";
                Result += "<a href='http://www.facebook.com/HouseThatKamuraiBuilt'>House That Kamurai Built Facebook.</a></br>";
                Result += "<a href='http://www.youtube.com/HTKB'>House That Kamurai Built Youtube.</a></br>";
                Result += "<a href='http://www.tumblr.com/blog/housethatkamuraibuilt'>House That Kamurai Built's Tumblr.</a></br>";
                //Response.Write("<a href='http://housethatkamuraibuilt.webs.com/'>House That Kamurai Built's Webs Account.</a></br>");
                Result += "<a href='http://myspace.com/housethatkamuraibuilt'>House That Kamurai Built's Myspace.</a></br>";

            }
            else if(input == 3)
            {
                Result += "<p align='left'>";
                    Result += "If you would like to play Minecraft with us, then you're welcome to join us here:</br>";
                    Result += "htkb.dyndns.org:25565</br>";
                    Result += "The server is running Minecraft version 1.7.10.</br>";
                    Result += "This is a list of mods that we are using on the server, compatible with 1.7.10.</br>";
                    Result += "<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/forge-1.7.10-10.13.2.1236-installer.jar'>Forge</a></br>";
                    Result += "<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/DrZharks MoCreatures Mod v6.3.1.zip'>Dr Zhark's Mo Creatures</a></br>";
                    Result += "<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/CustomMobSpawner 3.3.0.zip'>Custom Mob Spawner</a></br>";
                    Result += "<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/Reis-Minimap-Mod-1.7.10.jar'>Rei's Minimap</a></br>";
                    Result += "<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/[1.7.10]Gender-1.0.2.jar'>iPixeli's Gender Mod</a></br>";
                    Result += "<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/BspkrsCore-1.7.10.jar'>Bspkrs Core</a></br>";
                    Result += "<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/[1.7.10]Treecapitator-universal-2.0.4.jar'>Tree Capitator</a></br>";
                    Result += "<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/MoarFood-5.8.0.jar'>Moar Food</a></br>";
                    Result += "<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/MoarOres-2.4.5.jar'>Moar Ores</a></br>";
                    Result += "<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/BiblioCraft[v1.10.4][MC1.7.10].jar'>Biblio Craft</a></br>";
                    Result += "<a href='http://htkb.dyndns.org/Section3/Downloads/Minecraft/skin_template.png'>Steve skin template</a></br>";
                Result += "</p>";
                Result += "<p align='left'>";
                    Result += "For first time setups, please follow these steps to make your client compatible with the server:</br>";
                        Result += " 0) If you don't have Minecraft, go to Minecraft.net and download the latest version of the launcher.</br>";
                        Result += " 1) From the launcher create a new profile and change its version to 1.7.10.</br>";
                        Result += " 2) Save the Profile, select the new profile and click play.</br>";
                        Result += " 3) Exit the program.</br>";
                        Result += " 4) Install Forge.  If it is not automatically selected, then browse to your .minecraft folder.</br>";
                        Result += "     Windows: It is in a hidden folder: c:\\Users\\*Username*\\Appdata\\Roaming\\.minecraft</br>";
                        Result += "     Mac: 'Go to' ~/Library/Application Support/minecraft</br>";
                        Result += " 5) Place the Mo Creatures, Custom Mob Spawner, iPixeli's Gender Mod, Bspkers Core, Tree Capitator, Moar Food, Moar Ores, Biblio Craft and Rei's Minimap files into .minecraft/mods.  You may have to make the mods folder.</br>";
                        Result += " 6) Open the Minecraft Launcher, edit your 1.7.10 profile to use the forge version of 1.7.10.</br>";
                        Result += " 7) Save the Profile, select the new profile and click play.</br>";
                        Result += " 8) You should see the mods listed on the side of the Minecraft window.</br>";
                        Result += " 9) Go to multiplayer and click add server.</br>";
                        Result += "10) Name the server something distinct and put 'htkb.dyndns.org' or 'htkb.dyndns.org:25565' in the address bar.</br>";
                        Result += "11) Save the server entry.  You should see a connection to the server.  Double click to join.</br>";
                Result += "</p>";
            }
            else if(input == 4)
            {
                Result += "If you would like to join in the effort to be awesome, then here are some HTKB associated projects:</br>";
                Result += "</br>";
                Result += "<a href='http://www.youtube.com/WeAreMovieClub'>We Are Movie Club:  A Youtube Channel for media reviews.</a></br>";
                Result += "<a href='http://www.youtube.com/GamingDivision528'>Gaming Division:  A Youtube Channel for game stuff.</a></br>";
            }
            else if(input == 5)
            {
                Result += "<h3>";
                    Result += "<p align='left'>";
                        Result += "Kamurai:";
                    Result += "</p>";
                Result += "</h3>";
                Result += "<p align='left'>";
                    Result += "<a href='http://www.yoyogames.com/users/Kamurai'>Kamurai's YoYo Games page:  See some of the games he's posted.</a></br>";
                    Result += "<a href='http://www.facebook.com/cris.kamurai'>Kamurai's Facebook.</a></br>";
                    Result += "<a href='http://twitter.com/#!/Kamurai25'>Kamurai's Twitter.</a></br>";
                    Result += "<a href='https://www.gplus.com/Members/Cris-Kamurai'>Kamurai's Google Plus.</a></br>";
                Result += "</p>";
            }
        Result += "</p>";
        return Result;
    }
}
