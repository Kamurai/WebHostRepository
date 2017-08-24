#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the Title of the webpage

my $Page = $ARGV[0];

print "<title>";
    if($Page <= 0)
    {
        print "Gynowars";
    }
    elsif($Page == 1)
    {
        print "Gynowars RPG";
    }
    elsif($Page == 2)
    {
        print "Gynowars: Battle Arena CCG";
    }
    elsif($Page == 3)
    {
        print "Gynowars: Crash Ball";
    }
print "</title>";
