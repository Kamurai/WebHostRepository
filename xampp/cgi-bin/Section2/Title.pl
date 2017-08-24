#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the Title of the webpage

my $Page = $ARGV[0];

print "<title>";
    if($Page <= 0)
    {
        print "Private Projects";
    }
    elsif($Page == 2)
    {
        print "Assault CCG";
    }
    elsif($Page == 3)
    {
        print "Mars Projects";
    }
    elsif($Page == 7)
    {
        print "Truth";
    }
    elsif($Page == 8)
    {
        print "Kingdoms";
    }
    elsif($Page == 9)
    {
        print "Terminal World";
    }
    elsif($Page == 10)
    {
        print "Monster Office Workplace";
    }
    elsif($Page == 11)
    {
        print "Battle Princesses";
    }
print "</title>";
