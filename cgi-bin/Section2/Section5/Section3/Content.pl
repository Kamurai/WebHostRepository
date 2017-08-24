#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the content of the webpage

my $Page = $ARGV[0];

print "<p align='left'>";
    if($Page <= 0)
    {
        print "Here are projects based in the Utopia Nation:</br>";
        print "</br>";
        print "Elemental Angels: An adventure game with RPG elements based in the Avia Nation.</br>";
    }
    elsif($Page == 1)
    {
        print "Elemental Angels: Adventure game with RPG elements based in the Avia Nation.</br>";
    }
print "</p>";