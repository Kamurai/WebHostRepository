#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the header of the webpage content

my $Page = $ARGV[0];

if($Page <= 0)
{
    print "<h2>";
        print "Database Programming";
    print "</h2>";
}
elsif($Page == 1)
{
     print "<h2>";
		print "Oracle Programming";
    print "</h2>";
}
elsif($Page == 2)
{
    print "<h2>";
        print "MySQL Programming";
    print "</h2>";
}
elsif($Page == 3)
{
    print "<h2>";
        print "Postgres Programming";
    print "</h2>";
}
