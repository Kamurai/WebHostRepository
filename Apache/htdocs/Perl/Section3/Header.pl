#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the header of the webpage content

my $Page = $ARGV[0];

if($Page <= 0)
{
    print "<h2>";
        print "<u>";
            print "Downloadable Projects";
        print "</u>";
    print "</h2>";
}
elsif($Page == 1)
{
    print "<h2>";
        print "<u>";
            print "Online Experience Downloads";
        print "</u>";
    print "</h2>";
}
elsif($Page == 2)
{
    print "<h2>";
        print "<u>";
            print "Game Maker Downloads";
        print "</u>";
    print "</h2>";
}
elsif($Page == 3)
{
    print "<h2>";
        print "<u>";
            print "Java Downloads";
        print "</u>";
    print "</h2>";
}
elsif($Page == 4)
{
    print "<h2>";
        print "<u>";
            print "C# Downloads";
        print "</u>";
    print "</h2>";
}
elsif($Page == 5)
{
    print "<h2>";
        print "<u>";
            print "C++ Downloads";
        print "</u>";
    print "</h2>";
}