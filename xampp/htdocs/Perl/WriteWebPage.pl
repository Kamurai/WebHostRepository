#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
use CGI;
##  Writes the structure of the webpage

print "Content-type: text/html\n\n"; 

my $CGI            = CGI->new();
my $Page           = $CGI->param('vPage');
my $Path           = $CGI->param('vPath');
my $DownPath       = $CGI->param('vDownPath');
my $ScriptPath     = $CGI->param('vScriptPath');
my $ScriptDownPath = $CGI->param('vScriptDownPath');

print "<div align='center'>";
        ##<!--Table to place all subsections-->
        print "<table width='100%' cellpadding='0px' cellspacing='0px' border='0' align='center'>";
            print "<tbody>";
                ##<!--Top Row-->
                print "<tr>";
                    ##<!--Center Sub Section-->
                    print "<td class='td-header' colspan='3' alt='' valign='top'>";
                        print "<p align='center'>";
                            ##<!--Primary Header: Main Splash / Logo-->
	                        #Universal level
                            $ARGV[0] = $Path;
                            do $ScriptPath."TitlePicture.pl";
                        print "</p>";
                    print "</td>";
                print "</tr>";
                ##<!--2nd Row-->
                print "<tr>";
                    ##<!--NavBar-->
                    print "<td class='td-navbar' colspan='3' alt=''>";
                        print "<div>";
                            print "<ul id='list-nav'>";
                                print "<li>";
	                            	#Universal level
                                    $ARGV[0] = $Path;
                                    do $ScriptPath."NavBar.pl";
                                print "</li>";
                            print "</ul>";
                       print "</div>";
                    print "</td>";
                print "</tr>";
                ##<!--3rd Row-->
                print "<tr>";
                    ##<!--Left Sub Section-->
                    print "<td class='td-left' valign='top'>";
                        print "<div align='center'>";
                            print "<div class='left-box'>";
                                print "<div class='navlinks'>";
                                    print "<h4>";
                                        print "Navigation";
                                    print "</h4>";
                                    #Local level
                                    $ARGV[0]=$Path;
                                    $ARGV[1]=$DownPath;
                                    do $ScriptPath.$ScriptDownPath."Navigation.pl";
                                print "</div>";
                            print "</div>";
                        print "</div>";
                    print "</td>";
                    ##<!--Center Sub Section-->
                    print "<td class='td-content'>";
                        print "<div align='center'>";
                            print "<div class='content-box'>";
                                print "<div>";
                                    #Local level
                                    $ARGV[0]=$Page;
                                    do $ScriptPath.$ScriptDownPath."Title.pl";
                                    do $ScriptPath.$ScriptDownPath."Header.pl";
                                    do $ScriptPath.$ScriptDownPath."Content.pl";
                                print "</div>";
                                print "<br>";
                                print "<br>";
                            print "</div>";
                        print "</div>";
                    print "</td>";
                    ##<!--Right Sub Section-->
                    print "<td class='td-right' valign='top'>";
                        print "<div align='center'>";
                            print "<div class='right-box'>";
                                print "<h4>";
                                    print "Information";
                                print "</h4>";
                            print "</div>";
                        print "</div>";
                    print "</td>";
                print "</tr>";
                ##<!--4th Row-->
                print "<tr>";
                    ##<!--Center Sub Section-->
                    print "<td class='td-footer' colspan='3'>";
                        print "<div align='center'>";
                            print "<div class='footer-box'>";
								#Universal level
                                do $ScriptPath."Footer.pl";
                                do $ScriptPath."WebMaster.pl";
                            print "</div>";
                        print "</div>";
                    print "</td>";
                print "</tr>";
            print "</tbody>";
        print "</table>";
    print "</div>";