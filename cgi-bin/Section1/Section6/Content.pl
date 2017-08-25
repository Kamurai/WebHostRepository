#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the content of the webpage

my $Page = $ARGV[0];

print "<p id=\"idCenterContent\">";
    if($Page <= 0)
    {
        print "This section is dedicated to database based programming.";
    }
    elsif($Page == 1)
    {
        print "This section is dedicated to Oracle based programming.";
    }
    elsif($Page == 2)
    {
        print "This section is dedicated to MySQL based programming.";
    }
    elsif($Page == 3)
    {
        print "This section is dedicated to Postgres based programming.";
    }
print "</p>";
