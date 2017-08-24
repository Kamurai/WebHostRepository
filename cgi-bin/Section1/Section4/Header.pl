#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the header of the webpage content

my $Page = $ARGV[0];

if($Page <= 0)
{
    print "<h2>";
        print "<u>";
            print "Java Programming";
        print "</u>";
    print "</h2>";
}
elsif($Page == 1)
{
    print "<h2>";
        print "<u>";
            print "JSP Programming";
        print "</u>";
    print "</h2>";
}
elsif($Page == 2)
{
    print "<h2>";
        print "<u>";
            print "JSF Programming";
        print "</u>";
    print "</h2>";
}