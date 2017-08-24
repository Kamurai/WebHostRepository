#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the content of the webpage

my $Page = $ARGV[0];

print "<p align='left'>";
    if($Page <= 0)
    {
        print "This section is dedicated to projects centered in the Gynowars universe.";
    }
    elsif($Page == 1)
    {
        print "The Gynowars RPG is a 'pokemon-like' tactical RPG.";
        print "The protagonist uses creatures to fight battles against other creatures to progress through the storyline.";
    }
    elsif($Page == 2)
    {
        print "Gynowars: Battle Arena is a CCG that pits teams of creatures against each other ";
        print "in an arena-like environment.  There are several scenarios to run, to include:";
        print "</br>";
        print "'Death Match', 'Ring the Bell', and 'Head Hunt'.";
    }
    elsif($Page == 3)
    {
        print "Gynowars: Crash Ball is a turn based strategy board game.  Basically it's gridiron with Gynos.";
    }
print "</p>";