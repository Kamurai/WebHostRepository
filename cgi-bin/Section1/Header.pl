#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the header of the webpage content

my $Page = $ARGV[0];

if($Page <= 0)
{
    print "<h2>";
        print "<u>";
            print "Web Programming";
        print "</u>";
    print "</h2>";
}
elsif($Page == 2)
{
    print "<h2>";
        print "<u>";
            print "Javascript Programming";
        print "</u>";
    print "</h2>";
}
elsif($Page == 3)
{
    print "<h2>";
        print "<u>";
            print "Perl Programming";
        print "</u>";
    print "</h2>";
}
elsif($Page == 4)
{
    print "<h2>";
        print "<u>";
            print "Java Programming";
        print "</u>";
    print "</h2>";
}