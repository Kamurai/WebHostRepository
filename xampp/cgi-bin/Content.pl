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
        print "If you would like to play Minecraft with us, then you're welcome to join us here:</br>";
        print "</br>";
        print "http://htkb.dyndns.org:25565";
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
