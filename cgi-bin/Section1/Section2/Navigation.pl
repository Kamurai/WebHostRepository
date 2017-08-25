#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the navigation content of the webpage

my $Path = $ARGV[0];
my $DownPath = $ARGV[1];

print "<a href='".$Path."Section1/Project1.html'>Basic HTML</a></br></br>";
print "<a href='".$Path."Section1/Project1.php'>PHP</a></br></br>";
print "<a href='".$Path."Section1/Section2/Index.shtml'>Javascript</a></br></br>";
	print "<a href='".$Path."Javascript/Section1/Section2/Index.html'>HTML Javascript</a></br></br>";
	print "<a href='http://htkb.dyndns.org:81/ASP/Section1/Section2/Project2.asp'>ASP Javascript</a></br></br>";
	print "<a href='http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Project3.aspx'>ASP.NET Javascript</a></br></br>";
print "<a href='".$Path."Section1/Project3.shtml'>Perl</a></br></br>";
print "<a href='".$Path."Section1/Section4/Index.shtml'>Java</a></br></br>";
print "<a href='".$Path."Section1/Section5/Index.shtml'>ASP.Net</a></br></br>";
print "<a href='".$Path."Section1/Section6/Index.shtml'>Databases</a></br></br>";
print "<a href='http://htkb.dyndns.org/SSI/Section1/index.html'>Apache SSI</a></br></br>";
