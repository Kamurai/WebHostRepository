#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the Title of the webpage

my $Page = $ARGV[0];

print "<title>";
    if($Page <= 0)
    {
        print "Grendol";
    }
    elsif($Page == 1)
    {
        print "Land of the Orcish Empire: Age of Magic";
    }
    elsif($Page == 2)
    {
        print "Coliseum: Arena";
    }
print "</title>";
