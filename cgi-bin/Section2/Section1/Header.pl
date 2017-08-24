#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the header of the webpage content

my $Page = $ARGV[0];

if($Page <= 0)
{
    print "<h2>";
        print "<u>";
            print "Gynowars";
        print "</u>";
    print "</h2>";
}
elsif($Page == 1)
{
     print "<h2>";
        print "<u>";
            print "Gynowars RPG";
        print "</u>";
    print "</h2>";
}
elsif($Page == 2)
{
     print "<h2>";
        print "<u>";
            print "Gynowars: Battle Arena CCG";
        print "</u>";
    print "</h2>";
}
elsif($Page == 3)
{
     print "<h2>";
        print "<u>";
            print "Gynowars: Crash Ball";
        print "</u>";
    print "</h2>";
}
