#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the Title of the webpage

my $Page = $ARGV[0];

print "<title>";
    if($Page <= 0)
    {
        print "Utopia";
    }
    elsif($Page == 1)
    {
        print "Elemental Angels";
    }
print "</title>";
