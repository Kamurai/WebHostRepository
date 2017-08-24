#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
use CGI;
##  Writes the header of the webpage

print "Content-type: text/html\n\n"; 

my $CGI   = CGI->new();
my $CSS  = $CGI->param('vCSS');

print "<link href='".$CSS."moo.css' rel='stylesheet' type='text/css'>";
print "<font color='white'>";