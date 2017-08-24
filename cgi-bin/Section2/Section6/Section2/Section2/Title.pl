#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the Title of the webpage

my $Page = $ARGV[0];

print "<title>";
    if($Page <= 0)
    {
        print "HTKB Armies";
    }
    elsif($Page == 1)
    {
        print "Ad Infinitum";
    }
    elsif($Page == 2)
    {
        print "Avia";
    }
    elsif($Page == 3)
    {
        print "De Luna";
    }
    elsif($Page == 4)
    {
        print "Eve";
    }
    elsif($Page == 5)
    {
        print "Geo Marines";
    }
    elsif($Page == 6)
    {
        print "Twin Fists";
    }
    elsif($Page == 7)
    {
        print "Voboulids";
    }
    elsif($Page == 8)
    {
        print "Fungi";
    }
    elsif($Page == 9)
    {
        print "Synergy";
    }
    elsif($Page == 10)
    {
        print "The Dark";
    }
    elsif($Page == 11)
    {
        print "Vivus Mortem";
    }
print "</title>";
