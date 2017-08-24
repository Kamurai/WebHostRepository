#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the Title of the webpage

my $Page = $ARGV[0];

print "<title>";
    if($Page <= 0)
    {
        print "Database Programming";
    }
    elsif($Page == 1)
    {
        print "Oracle Programming";
    }
    elsif($Page == 2)
    {
        print "MySQL Programming";
    }
    elsif($Page == 3)
    {
        print "Postgres Programming";
    }
print "</title>";
