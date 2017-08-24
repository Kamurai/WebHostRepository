#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the navigation bar of the webpage

my $Path = $ARGV[0];

print "<a href='".$Path."Index.shtml'>Home</a>";
print "<a href='".$Path."Section1/Index.shtml'>Web Programming</a>";
print "<a href='".$Path."Section2/Index.shtml'>Private Projects</a>";
print "<a href='".$Path."Section3/Index.shtml'>Downloadable Projects</a>";


