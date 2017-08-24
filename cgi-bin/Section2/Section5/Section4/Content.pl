#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the content of the webpage

my $Page = $ARGV[0];

print "<p align='left'>";
    if($Page <= 0)
    {
        print "Here are projects based in the Elvia Empire:</br>";
        print "</br>";
        print "Nine Card: a Tactical card game played through the Elvia Empire.</br>";
    }
    elsif($Page == 1)
    {
        print "Nine Card is a Tactical card game played through the Elvia Empire.</br>";
    }
print "</p>";