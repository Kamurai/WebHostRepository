#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the content of the webpage

my $Page = $ARGV[0];

print "<p align='left'>";
    if($Page <= 0)
    {
        print "This section is dedicated to web-based programming.";
    }
    elsif($Page == 1)
    {
        print "This section is dedicated to Javascript based programming.";
    }
    elsif($Page == 3)
    {
        print "This section is dedicated to Perl based programming.";
    }
    elsif($Page == 4)
    {
        print "This section is dedicated to Java based programming.";
    }
    elsif($Page == 7)
    {
        print "This section is dedicated to HTML5 based programming.";
    }
    elsif($Page == 8)
    {
        print "This section is dedicated to XSL based programming.";
    }
    elsif($Page == 9)
    {
        print "This section is dedicated to XML DOM based programming.";
    }
print "</p>";
