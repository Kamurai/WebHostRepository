#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the navigation content of the webpage

my $Path = $ARGV[0];
my $DownPath = $ARGV[1];

print "<span class='navlink'>";
    print "<a href='".$Path."Section3/Project1.shtml'>Online Experience Downloads</a>";
print "</span>";
print "<br>";
print "<span class='navlink'>";
    print "<a href='".$Path."Section3/Project2.shtml'>Game Maker Downloads</a>";
print "</span>";
print "<br>";
print "<span class='navlink'>";
    print "<a href='".$Path."Section3/Project3.shtml'>Java Downloads</a>";
print "</span>";
print "<br>";
print "<span class='navlink'>";
    print "<a href='".$Path."Section3/Project4.shtml'>C# Downloads</a>";
print "</span>";
print "<br>";
print "<span class='navlink'>";
    print "<a href='".$Path."Section3/Project5.shtml'>C++ Downloads</a>";
print "</span>";
print "<br>";
