#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the Title of the webpage

my $Page = $ARGV[0];

print "<title>";
    if($Page <= 0)
    {
        print "Downloadable Projects";
    }
    elsif($Page == 1)
    {
        print "Online Experience Downloads";
    }
    elsif($Page == 2)
    {
        print "Game Maker Downloads";
    }
    elsif($Page == 3)
    {
        print "Java Downloads";
    }
    elsif($Page == 4)
    {
        print "# Downloads";
    }
    elsif($Page == 5)
    {
        print "C++ Downloads";
    }
print "</title>";
