#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the content of the webpage

my $Page = $ARGV[0];

print "<p align='left'>";
    if($Page <= 0)
    {
        print "This section is dedicated to projects that edit the Warhammer 40K universe.";
    }
    elsif($Page == 1)
    {
        print "This section is dedicated to an adventure RPG project in the Warhammer 40K universe.";
    }
print "</p>";