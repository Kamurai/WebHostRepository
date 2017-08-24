#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the Title of the webpage

my $Page = $ARGV[0];

print "<title>";
    if($Page <= 0)
    {
        print "Java Programming";
    }
    if($Page == 1)
    {
        print "JSP Programming";
    }
    if($Page == 2)
    {
        print "JSF Programming";
    }
print "</title>";
