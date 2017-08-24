#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the content of the webpage

my $Page = $ARGV[0];

print "<p align='left'>";
    if($Page <= 0)
    {
        print "Here are projects based in the Antarrea universe:</br>";
        print "</br>";
        print "Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>";
        print "Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>";
        print "Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>";
        print "Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>";
        print "Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>";
        print "Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>";
     }
    elsif($Page == 1)
    {
        print "Team Tactical: Crash Ball is a tactical board game centered on a battle version of football.</br>";
    }
    elsif($Page == 2)
    {
        print "Wars of Antarrea is a table-top game where two or more armies battle for supremacy.</br>";
    }
    elsif($Page == 3)
    {
        print "Revolutions is a Tactical RPG with Invading Nations as its 1st story arc.</br>";
    }
    elsif($Page == 4)
    {
        print "Revolutions is a Tactical RPG with Rebellion Against the Fist as its 2nd story arc.</br>";
    }
    elsif($Page == 5)
    {
        print "Revolutions is a Tactical RPG with Return to Arms as its 3rd story arc.</br>";
    }
    elsif($Page == 6)
    {
        print "Revolutions is a Tactical RPG with Post Wars as its 4th story arc.</br>";
    }
print "</p>";