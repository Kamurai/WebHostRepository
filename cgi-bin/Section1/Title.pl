#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the Title of the webpage

my $Page = $ARGV[0];

print "<title>";
    if($Page <= 0)
    {
        print "Web Programming";
    }
    elsif($Page == 2)
    {
        print "Javascript Programming";
    }
    elsif($Page == 3)
    {
        print "Perl Programming";
    }
    elsif($Page == 4)
    {
        print "Java Programming";
    }
print "</title>";
