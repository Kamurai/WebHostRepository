#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the content of the webpage

my $Page = $ARGV[0];

print "<p align='left'>";
    if($Page <= 0)
    {
        print "This section is dedicated to HTKB projects.";
    }
    elsif($Page == 2)
    {
        print "This section is dedicated CCG project 'Assault'.";
    }
    elsif($Page == 3)
    {
        print "This section is dedicated to the Mars centered project 'Opposition'.";
    }
    elsif($Page == 7)
    {
        print "This section is dedicated to the MMO RTS project 'Truth'.  Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries.";
    }
    elsif($Page == 8)
    {
        print "This section is dedicated to the digital board game project 'Kingdoms'.  Explore the world's Kingdoms, get rich, get strong and conquer.";
    }
    elsif($Page == 9)
    {
        print "<p align='left'>";
            print "This section is dedicated to the simulation MMO centered project 'Terminal World'.  This is a virtual environment where a zombie outbreak is about to happen.  Can you beat";
            print "the zombies?  Can you survive?";
        print "</p>";
    }
    elsif($Page == 10)
    {
        print "<p align='left'>";
            print "This section is dedicated to the card and board game project 'Monster Office Workplace'.  These monsters mean serious business.";
            print "Can you earn the most credit and smooze your way into a promotion?";
        print "</p>";
    }
    elsif($Page == 11)
    {
        print "<p align='left'>";
            print "This section is dedicated to the card game project 'Battle Princesses'.  Ever wanted to see your favorite princess battle for the kingdom?";
            print "These princess aren't your helpless maidens, but valiant warriors themselves.";
        print "</p>";
    }
print "</p>";
