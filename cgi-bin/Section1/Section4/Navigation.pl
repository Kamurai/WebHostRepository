#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the navigation content of the webpage

my $Path = $ARGV[0];
my $DownPath = $ARGV[1];

print "<a href='".$Path."Section1/Project1.html'>Basic HTML</a></br></br>";
print "<a href='".$Path."Section1/Project1.php'>PHP</a></br></br>";
print "<a href='".$Path."Section1/Section2/Index.shtml'>Javascript</a></br></br>";
print "<a href='".$Path."Section1/Project3.shtml'>Perl</a></br></br>";
print "<a href='".$Path."Section1/Section4/Index.html'>Java</a></br></br>";
	print "<a href='http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/Project1.jsp'>JSP Programming</a></br></br>";
	print "<a href='http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/Project2.xhtml'>JSF Programming</a></br></br>";
print "<a href='".$Path."Section1/Section5/Index.shtml'>ASP.Net</a></br></br>";
print "<a href='".$Path."Section1/Section6/Index.shtml'>Databases</a></br></br>";
print "<a href='http://htkb.dyndns.org/SSI/Section1/index.html'>Apache SSI</a></br></br>";

