#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the header of the webpage content

my $Page = $ARGV[0];

if($Page <= 0)
{
    print "<h2>";
        print "<u>";
            print "Renley";
        print "</u>";
    print "</h2>";
}
elsif($Page == 1)
{
     print "<h2>";
        print "<u>";
            print "Warring Nations";
        print "</u>";
    print "</h2>";
}
elsif($Page == 2)
{
     print "<h2>";
        print "<u>";
            print "Psychodom: The One Empire";
        print "</u>";
    print "</h2>";
}
