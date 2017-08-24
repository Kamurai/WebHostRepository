#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the navigation content of the webpage

my $Path = $ARGV[0];
my $DownPath = $ARGV[1];

print "<span class='navlink'>";
    print "<a href='".$Path."Section1/Project1.html'>Basic HTML</a>";
print "</span>";
print "<br>";
print "<span class='navlink'>";
    print "<a href='".$Path."Section1/Project1.php'>PHP</a>";
print "</span>";
print "<br>";
print "<span class='navlink'>";
    print "<a href='".$Path."Section1/Section2/Index.shtml'>Javascript</a>";
print "</span>";
print "<br>";
print "<span class='navlink'>";
    print "<a href='".$Path."Section1/Project3.shtml'>Perl</a>";
print "</span>";
print "<br>";
print "<span class='navlink'>";
    print "<a href='".$Path."Section1/Project4.shtml'>XHTML</a>";
print "</span>";
print "<br>";
print "<span class='navlink'>";
    print "<a href='".$Path."Section1/Section5/Index.shtml'>ASP.Net</a>";
print "</span>";
print "<br>";
print "<span class='navlink'>";
    print "<a href='".$Path."Section1/Section6/Index.shtml'>Databases</a>";
print "</span>";
print "<br>";
