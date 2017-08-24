#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the content of the webpage

my $Page = $ARGV[0];

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
        print "Here is a list of other HTKB affiliated webpages:</br>";
        print "</br>";
        print "<a href='http://www.facebook.com/HouseThatKamuraiBuilt'>House That Kamurai Built Facebook.</a></br>";
        print "<a href='http://www.youtube.com/HTKB'>House That Kamurai Built Youtube.</a></br>";
        print "<a href='http://www.tumblr.com/blog/housethatkamuraibuilt'>House That Kamurai Built's Tumblr.</a></br>";
        #print "<a href='http://housethatkamuraibuilt.webs.com/'>House That Kamurai Built's Webs Account.</a></br>";
        print "<a href='http://myspace.com/housethatkamuraibuilt'>House That Kamurai Built's Myspace.</a></br>";
    }
    elsif($Page == 3)
    {
        print "<p align='left'>";
            print "If you would like to play Minecraft with us, then you're welcome to join us here:</br>";
            print "htkb.dyndns.org:25565</br>";
            print "The server is running Minecraft version 1.7.10.</br>";
            print "This is a list of mods that we are using on the server, compatible with 1.7.10.</br>";
            print "<a href='./Section3/Downloads/Minecraft/forge-1.7.10-10.13.2.1236-installer.jar'>Forge</a></br>";
            print "<a href='./Section3/Downloads/Minecraft/DrZharks MoCreatures Mod v6.3.1.zip'>Dr Zhark's Mo Creatures</a></br>";
            print "<a href='./Section3/Downloads/Minecraft/CustomMobSpawner 3.3.0.zip'>Custom Mob Spawner</a></br>";
            print "<a href='./Section3/Downloads/Minecraft/Reis-Minimap-Mod-1.7.10.jar'>Rei's Minimap</a></br>";
            print "<a href='./Section3/Downloads/Minecraft/[1.7.10]Gender-1.0.2.jar'>iPixeli's Gender Mod</a></br>";
            print "<a href='./Section3/Downloads/Minecraft/BspkrsCore-1.7.10.jar'>Bspkrs Core</a></br>";
            print "<a href='./Section3/Downloads/Minecraft/[1.7.10]Treecapitator-universal-2.0.4.jar'>Tree Capitator</a></br>";
            print "<a href='./Section3/Downloads/Minecraft/MoarFood-5.8.0.jar'>Moar Food</a></br>";
            print "<a href='./Section3/Downloads/Minecraft/MoarOres-2.4.5.jar'>Moar Ores</a></br>";
            print "<a href='./Section3/Downloads/Minecraft/BiblioCraft[v1.10.4][MC1.7.10].jar'>Biblio Craft</a></br>";
            print "<a href='./Section3/Downloads/Minecraft/skin_template.png'>Steve skin template</a></br>";
        print "</p>";
        print "<p align='left'>";
            print "For first time setups, please follow these steps to make your client compatible with the server:</br>";
                print " 0) If you don't have Minecraft, go to Minecraft.net and download the latest version of the launcher.</br>";
                print " 1) From the launcher create a new profile and change its version to 1.7.10.</br>";
                print " 2) Save the Profile, select the new profile and click play.</br>";
                print " 3) Exit the program.</br>";
                print " 4) Install Forge.  If it is not automatically selected, then browse to your .minecraft folder.</br>";
                print "		Windows: It is in a hidden folder: c:\Users\*Username*\Appdata\Roaming\.minecraft";
				print "		Mac: 'Go to' ~/Library/Application Support/minecraft";
                print " 5) Place the Mo Creatures, Custom Mob Spawner, iPixeli's Gender Mod, Bspkers Core, Tree Capitator, Moar Food, Moar Ores, Biblio Craft and Rei's Minimap files into .minecraft/mods.  You may have to make the mods folder.</br>";
                print " 6) Open the Minecraft Launcher, edit your 1.7.10 profile to use the forge version of 1.7.10.</br>";
                print " 7) Save the Profile, select the new profile and click play.</br>";
                print " 8) You should see the mods listed on the side of the Minecraft window.</br>";
                print " 9) Go to multiplayer and click add server.</br>";
                print "10) Name the server something distinct and put 'htkb.dyndns.org' or 'htkb.dyndns.org:25565' in the address bar.</br>";
                print "11) Save the server entry.  You should see a connection to the server.  Double click to join.</br>";
        print "</p>";
    }
    elsif($Page == 4)
    {
        print "If you would like to join in the effort to be awesome, then here are some HTKB associated projects:</br>";
        print "</br>";
        print "<a href='http://www.youtube.com/WeAreMovieClub'>We Are Movie Club:  A Youtube Channel for media reviews.</a></br>";
        print "<a href='http://www.youtube.com/GamingDivision528'>Gaming Division:  A Youtube Channel for game stuff.</a></br>";
    }
    elsif($Page == 5)
    {
        print "<h3>";
            print "<p align='left'>";
                print "Kamurai:";
            print "</p>";
        print "</h3>";
        print "<p align='left'>";
            print "<a href='http://www.yoyogames.com/users/Kamurai'>Kamurai's YoYo Games page:  See some of the games he's posted.</a></br>";
            print "<a href='http://www.facebook.com/cris.kamurai'>Kamurai's Facebook.</a></br>";
            print "<a href='http://twitter.com/#!/Kamurai25'>Kamurai's Twitter.</a></br>";
            print "<a href='https://www.gplus.com/Members/Cris-Kamurai'>Kamurai's Google Plus.</a></br>";
        print "</p>";
    }
print "</p>";
