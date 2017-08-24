#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the content of the webpage

my $Page = $ARGV[0];

print "<p align='left'>";
    if($Page <= 0)
    {
        print "Here are projects based in the Grendol Empire:</br>";
        print "</br>";
        print "Land of the Orcish Empire: Age of Magic: a CCG based on the different factions that ";
        print "comprise the Grendol Empire.</br>";
        print "Coliseum: Arena: a CCG representing the gladitorial arenas of Grendol.</br>";
    }
    elsif($Page == 1)
    {
        print "Land of the Orcish Empire: Age of Magic: is a CCG based on the different factions that ";
        print "comprise the Grendol Empire.";
    }
    elsif($Page == 2)
    {
        print "Coliseum: Arena is a CCG representing the gladitorial arenas of Grendol.";
    }
print "</p>";