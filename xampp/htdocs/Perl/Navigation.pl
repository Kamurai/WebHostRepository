#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the navigation content of the webpage

my $Path = $ARGV[0];
my $DownPath = $ARGV[1];

print "<span class='navlink'>";
    print "<a href='".$Path."AboutUs.shtml'>About Us</a>";
print "</span>";
print "<br>";
print "<span class='navlink'>";
    print "<a href='".$Path."Affiliation.shtml'>HTKB Affiliations</a>";
print "</span>";
print "<br>";
print "<span class='navlink'>";
    print "<a href='".$Path."Minecraft.shtml'>Minecraft!</a>";
print "</span>";
print "<br>";
print "<span class='navlink'>";
    print "<a href='".$Path."PublicProjects.shtml'>Public Projects</a>";
print "</span>";
print "<br>";
print "<span class='navlink'>";
    print "<a href='".$Path."MemberPages.shtml'>Member Pages</a>";
print "</span>";
print "<br>";
