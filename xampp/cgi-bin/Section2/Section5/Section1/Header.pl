#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the header of the webpage content

my $Page = $ARGV[0];

if($Page <= 0)
{
    print "<h2>";
        print "<u>";
            print "Global Antarrea";
        print "</u>";
    print "</h2>";
}
elsif($Page == 1)
{
     print "<h2>";
        print "<u>";
            print "Team Tactical: Crash Ball";
        print "</u>";
    print "</h2>";
}
elsif($Page == 2)
{
     print "<h2>";
        print "<u>";
            print "Wars of Antarrea";
        print "</u>";
    print "</h2>";
}
elsif($Page == 3)
{
     print "<h2>";
        print "<u>";
            print "Revolutions: Invading Nations";
        print "</u>";
    print "</h2>";
}
elsif($Page == 4)
{
     print "<h2>";
        print "<u>";
            print "Revolutions: Rebellion Against the Fist";
        print "</u>";
    print "</h2>";
}
elsif($Page == 5)
{
     print "<h2>";
        print "<u>";
            print "Revolutions: Return to Arms";
        print "</u>";
    print "</h2>";
}
elsif($Page == 6)
{
     print "<h2>";
        print "<u>";
            print "Revolutions: Post Wars";
        print "</u>";
    print "</h2>";
}
