#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the content of the webpage

my $Page = $ARGV[0];

print "<p align='left'>";
    if($Page <= 0)
    {
        print "<h3>";
            print "<p align='left'>";
                print "Global:";
            print "</p>";
        print "</h3>";
        print "<p align='left'>";
            print "Here are projects based in the Antarrea universe:</br>";
            print "</br>";
            print "Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>";
            print "Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>";
            print "Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>";
            print "Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>";
            print "Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>";
            print "Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>";
        print "</p>";
        print "<h3>";
            print "<p align='left'>";
                print "Grendol:";
            print "</p>";
        print "</h3>";
        print "<p align='left'>";
            print "Here are projects based in the Grendol universe:</br>";
            print "</br>";
            print "Grendol: Land of the Orcish Empire: Age of Magic: CCG.</br>";
            print "Grendol: Coliseum: Arena:                         CCG.</br>";
        print "</p>";
        print "<h3>";
            print "<p align='left'>";
                print "Utopia:";
            print "</p>";
        print "</h3>";
        print "<p align='left'>";
            print "Here are projects based in the Utopia universe:</br>";
            print "</br>";
            print "Avia: Elemental Angels: Adventure game with RPG elements.</br>";
        print "</p>";
        print "<h3>";
            print "<p align='left'>";
                print "Elvia:";
            print "</p>";
        print "</h3>";
        print "<p align='left'>";
            print "Here are projects based in the Elvia universe:</br>";
            print "</br>";
            print "Nine Card: Tactical card game.</br>";
        print "</p>";
    }
print "</p>";