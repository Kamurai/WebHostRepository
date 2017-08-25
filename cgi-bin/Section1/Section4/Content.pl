#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the content of the webpage

my $Page = $ARGV[0];

print "<p id=\"idCenterContent\">";
    if($Page <= 0)
    {
        print "This section is dedicated to Java based programming.";
    }
    elsif($Page == 1)
    {
        print "This section is dedicated to JSP based programming.";
    }
    elsif($Page == 2)
    {
        print "This section is dedicated to JSF based programming.";
    }
print "</p>";
