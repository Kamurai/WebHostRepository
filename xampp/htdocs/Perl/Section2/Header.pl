#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the header of the webpage content

my $Page = $ARGV[0];

if($Page <= 0)
{
    print "<h2>";
        print "<u>";
            print "Private Projects";
        print "</u>";
    print "</h2>";
}
elsif($Page == 2)
{
    print "<h2>";
        print "<u>";
            print "Assault CCG";
        print "</u>";
    print "</h2>";
}
elsif($Page == 3)
{
    print "<h2>";
        print "<u>";
            print "Mars Projects";
        print "</u>";
    print "</h2>";
}
elsif($Page == 7)
{
    print "<h2>";
        print "<u>";
            print "Truth";
        print "</u>";
    print "</h2>";
}
elsif($Page == 8)
{
    print "<h2>";
        print "<u>";
            print "Kingdoms";
        print "</u>";
    print "</h2>";
}
elsif($Page == 9)
{
    print "<h2>";
        print "<u>";
            print "Terminal World";
        print "</u>";
    print "</h2>";
}
elsif($Page == 10)
{
    print "<h2>";
        print "<u>";
            print "Monster Office Workplace";
        print "</u>";
    print "</h2>";
}
elsif($Page == 11)
{
    print "<h2>";
        print "<u>";
            print "Battle Princesses";
        print "</u>";
    print "</h2>";
}