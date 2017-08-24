#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the Title of the webpage

my $Page = $ARGV[0];

print "<title>";
    if($Page <= 0)
    {
        print "Global Antarrea";
    }
    elsif($Page == 1)
    {
        print "Team Tactical: Crash Ball";
    }
    elsif($Page == 2)
    {
        print "Wars of Antarrea";
    }
    elsif($Page == 3)
    {
        print "Revolutions: Invading Nations";
    }
    elsif($Page == 4)
    {
        print "Revolutions: Rebellion Against the Fist";
    }
    elsif($Page == 5)
    {
        print "Revolutions: Return to Arms";
    }
    elsif($Page == 6)
    {
        print "Revolutions: Post Wars";
    }
print "</title>";
