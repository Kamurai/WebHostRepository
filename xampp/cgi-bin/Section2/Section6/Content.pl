#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the content of the webpage

my $Page = $ARGV[0];

print "<p align='left'>";
    if($Page <= 0)
    {
        print "This section is dedicated to projects that edit universes outside of HTKB.";
    }
    elsif($Page == 1)
    {
        print "This section is dedicated to a modified game based on the 'Magic: The Gathering' CCG.";
    }
print "</p>";