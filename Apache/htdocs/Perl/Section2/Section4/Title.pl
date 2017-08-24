#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the Title of the webpage

my $Page = $ARGV[0];

print "<title>";
    if($Page <= 0)
    {
        print "Renley";
    }
    elsif($Page == 1)
    {
        print "Warring Nations";
    }
    elsif($Page == 2)
    {
        print "Psychodom: The One Empire";
    }
print "</title>";
