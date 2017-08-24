#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the Title of the webpage

my $Page = $ARGV[0];

print "<title>";
    if($Page <= 0)
    {
        print "HTKB Home Page";
    }
    elsif($Page == 1)
    {
        print "HTKB Affiliation";
    }
    elsif($Page == 2)
    {
        print "About Us";
    }
    elsif($Page == 3)
    {
        print "Minecraft!";
    }
    elsif($Page == 4)
    {
        print "HTKB Public Projects";
    }
    elsif($Page == 5)
    {
        print "Member Pages";
    }
print "</title>";
