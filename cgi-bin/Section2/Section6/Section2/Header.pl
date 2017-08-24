#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the header of the webpage content

my $Page = $ARGV[0];

if($Page <= 0)
{
    print "<h2>";
        print "<u>";
            print "Warhammer 40K";
        print "</u>";
    print "</h2>";
}
elsif($Page == 1)
{
     print "<h2>";
        print "<u>";
            print "Mission!";
        print "</u>";
    print "</h2>";
}