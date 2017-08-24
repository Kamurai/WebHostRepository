#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the header of the webpage content

my $Page = $ARGV[0];

if($Page <= 0)
{
    print "<h2>";
        print "Java Programming";
    print "</h2>";
}
elsif($Page == 1)
{
    print "<h2>";
        print "JSP Programming";
    print "</h2>";
}
elsif($Page == 2)
{
    print "<h2>";
        print "JSF Programming";
    print "</h2>";
}