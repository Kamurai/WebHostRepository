#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the header of the webpage content

my $Page = $ARGV[0];

if($Page <= 0)
{
    print "<h2>";
        print "<u>";
            print "Welcome to the House That Kamurai Built!";
        print "</u>";
    print "</h2>";
}
elsif($Page == 1)
{
    print "<h2>";
        print "<u>";
            print "About Us";
        print "</u>";
    print "</h2>";
}
elsif($Page == 2)
{
    print "<h2>";
        print "<u>";
            print "HTKB Affiliation";
        print "</u>";
    print "</h2>";
}
elsif($Page == 3)
{
    print "<h2>";
        print "<u>";
            print "Minecraft!";
        print "</u>";
    print "</h2>";
}
elsif($Page == 4)
{
    print "<h2>";
        print "<u>";
            print "HTKB Public Projects";
        print "</u>";
    print "</h2>";
}
elsif($Page == 5)
{
    print "<h2>";
        print "<u>";
            print "Member Pages";
        print "</u>";
    print "</h2>";
    print "<p align='left'>";
        print "<Here are some of our member's pages:</br>";
    print "</p>";
}