#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the content of the webpage

my $Page = $ARGV[0];

print "<p id=\"idCenterContent\">";
    if($Page <= 0)
    {
        print "This section is dedicated to ASP.NET programming.";
    }
print "</p>";
