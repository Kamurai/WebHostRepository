#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the content of the webpage

my $Page = $ARGV[0];

print "<p align='left'>";
    if($Page <= 0)
    {
        print "This section is dedicated to projects centered in the Renley universe.";
    }
    elsif($Page == 1)
    {
        print "Warring Nations is a Tactical RPG involving squad based battles.";
        print "Characters advance classes based on their weapon proficiencies and/or currently equipped weapons.";
    }
    elsif($Page == 2)
    {
        print "Psychodom: The One Empire is a 3rd person perspective Adventure / RPG.";
        print "The protagonist is tasked with investigating various situations leading ";
        print "to a conspiracy about who is really ruling the continent.";
    }
print "</p>";