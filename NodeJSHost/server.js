var http = require('http');
var fs = require('fs');

//var universal = require('./Universal');

//create a server object:
http.createServer
(
    function (req, res) 
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        
        if(req.url == '/' || req.url == '/index')
        {
            var layout = require('./Layout');
            var custom = require('./Custom');
        
            var vPage  = 0;
            var vLevel = 0;
            var vSection = 0;
            var vCSS = "Main.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/AboutUs')
        {
            var layout = require('./Layout');
            var custom = require('./Custom');
        
            var vPage  = 1;
            var vLevel = 0;
            var vSection = 0;
            var vCSS = "Main.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Media')
        {
            var layout = require('./Layout');
            var custom = require('./Custom');
        
            var vPage  = 2;
            var vLevel = 0;
            var vSection = 0;
            var vCSS = "Main.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Minecraft')
        {
            var layout = require('./Layout');
            var custom = require('./Custom');
        
            var vPage  = 3;
            var vLevel = 0;
            var vSection = 0;
            var vCSS = "Main.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }        
        else if(req.url == '/Section1/index')
        {
            var layout = require('./Section1/Layout');
            var custom = require('./Section1/Custom');
        
            var vPage  = 0;
            var vLevel = 1;
            var vSection = 3;
            var vCSS = "Section1.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section1/Section2/index')
        {
            var layout = require('./Section1/Section2/Layout');
            var custom = require('./Section1/Section2/Custom');
        
            var vPage  = 0;
            var vLevel = 2;
            var vSection = 1;
            var vCSS = "Section1.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section1/Section2/Project4')
        {
            var layout = require('./Section1/Section2/Layout');
            var custom = require('./Section1/Section2/Custom');
        
            var vPage  = 4;
            var vLevel = 2;
            var vSection = 1;
            var vCSS = "Section1.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section1/Section4/index')
        {
            var layout = require('./Section1/Section4/Layout');
            var custom = require('./Section1/Section4/Custom');
        
            var vPage  = 0;
            var vLevel = 2;
            var vSection = 1;
            var vCSS = "Section1.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section1/Section5/index')
        {
            var layout = require('./Section1/Section5/Layout');
            var custom = require('./Section1/Section5/Custom');
        
            var vPage  = 0;
            var vLevel = 2;
            var vSection = 1;
            var vCSS = "Section1.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section1/Section6/index')
        {
            var layout = require('./Section1/Section6/Layout');
            var custom = require('./Section1/Section6/Custom');
        
            var vPage  = 0;
            var vLevel = 2;
            var vSection = 1;
            var vCSS = "Section1.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section1/Section6/Project1')
        {
            var layout = require('./Section1/Section6/Layout');
            var custom = require('./Section1/Section6/Custom');
        
            var vPage  = 1;
            var vLevel = 2;
            var vSection = 1;
            var vCSS = "Section1.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section1/Section6/Project2')
        {
            var layout = require('./Section1/Section6/Layout');
            var custom = require('./Section1/Section6/Custom');
        
            var vPage  = 2;
            var vLevel = 2;
            var vSection = 1;
            var vCSS = "Section1.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section1/Section6/Project3')
        {
            var layout = require('./Section1/Section6/Layout');
            var custom = require('./Section1/Section6/Custom');
        
            var vPage  = 3;
            var vLevel = 2;
            var vSection = 1;
            var vCSS = "Section1.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section1/Section6/Project4')
        {
            var layout = require('./Section1/Section6/Layout');
            var custom = require('./Section1/Section6/Custom');
        
            var vPage  = 4;
            var vLevel = 2;
            var vSection = 1;
            var vCSS = "Section1.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section1/Section6/Project5')
        {
            var layout = require('./Section1/Section6/Layout');
            var custom = require('./Section1/Section6/Custom');
        
            var vPage  = 5;
            var vLevel = 2;
            var vSection = 1;
            var vCSS = "Section1.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/index')
        {
            var layout = require('./Section2/Layout');
            var custom = require('./Section2/Custom');
        
            var vPage  = 0;
            var vLevel = 1;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Project2')
        {
            var layout = require('./Section2/Layout');
            var custom = require('./Section2/Custom');
        
            var vPage  = 2;
            var vLevel = 1;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Project3')
        {
            var layout = require('./Section2/Layout');
            var custom = require('./Section2/Custom');
        
            var vPage  = 3;
            var vLevel = 1;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Project7')
        {
            var layout = require('./Section2/Layout');
            var custom = require('./Section2/Custom');
        
            var vPage  = 7;
            var vLevel = 1;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Project8')
        {
            var layout = require('./Section2/Layout');
            var custom = require('./Section2/Custom');
        
            var vPage  = 8;
            var vLevel = 1;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Project9')
        {
            var layout = require('./Section2/Layout');
            var custom = require('./Section2/Custom');
        
            var vPage  = 9;
            var vLevel = 1;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Project10')
        {
            var layout = require('./Section2/Layout');
            var custom = require('./Section2/Custom');
        
            var vPage  = 10;
            var vLevel = 1;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Project11')
        {
            var layout = require('./Section2/Layout');
            var custom = require('./Section2/Custom');
        
            var vPage  = 11;
            var vLevel = 1;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Project12')
        {
            var layout = require('./Section2/Layout');
            var custom = require('./Section2/Custom');
        
            var vPage  = 12;
            var vLevel = 1;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Project13')
        {
            var layout = require('./Section2/Layout');
            var custom = require('./Section2/Custom');
        
            var vPage  = 13;
            var vLevel = 1;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Project14')
        {
            var layout = require('./Section2/Layout');
            var custom = require('./Section2/Custom');
        
            var vPage  = 14;
            var vLevel = 1;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Project15')
        {
            var layout = require('./Section2/Layout');
            var custom = require('./Section2/Custom');
        
            var vPage  = 15;
            var vLevel = 1;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section1/index')
        {
            var layout = require('./Section2/Section1/Layout');
            var custom = require('./Section2/Section1/Custom');
        
            var vPage  = 0;
            var vLevel = 2;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section1/Project1')
        {
            var layout = require('./Section2/Section1/Layout');
            var custom = require('./Section2/Section1/Custom');
        
            var vPage  = 1;
            var vLevel = 2;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section1/Project2')
        {
            var layout = require('./Section2/Section1/Layout');
            var custom = require('./Section2/Section1/Custom');
        
            var vPage  = 2;
            var vLevel = 2;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section1/Project3')
        {
            var layout = require('./Section2/Section1/Layout');
            var custom = require('./Section2/Section1/Custom');
        
            var vPage  = 3;
            var vLevel = 2;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section4/index')
        {
            var layout = require('./Section2/Section4/Layout');
            var custom = require('./Section2/Section4/Custom');
        
            var vPage  = 4;
            var vLevel = 2;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section4/Project1')
        {
            var layout = require('./Section2/Section4/Layout');
            var custom = require('./Section2/Section4/Custom');
        
            var vPage  = 1;
            var vLevel = 2;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section4/Project2')
        {
            var layout = require('./Section2/Section4/Layout');
            var custom = require('./Section2/Section4/Custom');
        
            var vPage  = 2;
            var vLevel = 2;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section5/index')
        {
            var layout = require('./Section2/Section5/Layout');
            var custom = require('./Section2/Section5/Custom');
        
            var vPage  = 0;
            var vLevel = 2;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section5/Section1/index')
        {
            var layout = require('./Section2/Section5/Section1/Layout');
            var custom = require('./Section2/Section5/Section1/Custom');
        
            var vPage  = 0;
            var vLevel = 3;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section5/Section1/Project1')
        {
            var layout = require('./Section2/Section5/Section1/Layout');
            var custom = require('./Section2/Section5/Section1/Custom');
        
            var vPage  = 1;
            var vLevel = 3;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section5/Section1/Project2')
        {
            var layout = require('./Section2/Section5/Section1/Layout');
            var custom = require('./Section2/Section5/Section1/Custom');
        
            var vPage  = 2;
            var vLevel = 3;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section5/Section1/Project3')
        {
            var layout = require('./Section2/Section5/Section1/Layout');
            var custom = require('./Section2/Section5/Section1/Custom');
        
            var vPage  = 3;
            var vLevel = 3;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section5/Section1/Project4')
        {
            var layout = require('./Section2/Section5/Section1/Layout');
            var custom = require('./Section2/Section5/Section1/Custom');
        
            var vPage  = 4;
            var vLevel = 3;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section5/Section1/Project5')
        {
            var layout = require('./Section2/Section5/Section1/Layout');
            var custom = require('./Section2/Section5/Section1/Custom');
        
            var vPage  = 5;
            var vLevel = 3;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section5/Section1/Project6')
        {
            var layout = require('./Section2/Section5/Section1/Layout');
            var custom = require('./Section2/Section5/Section1/Custom');
        
            var vPage  = 6;
            var vLevel = 3;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section5/Section2/index')
        {
            var layout = require('./Section2/Section5/Section2/Layout');
            var custom = require('./Section2/Section5/Section2/Custom');
        
            var vPage  = 0;
            var vLevel = 3;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section5/Section2/Project1')
        {
            var layout = require('./Section2/Section5/Section2/Layout');
            var custom = require('./Section2/Section5/Section2/Custom');
        
            var vPage  = 1;
            var vLevel = 3;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section5/Section2/Project2')
        {
            var layout = require('./Section2/Section5/Section2/Layout');
            var custom = require('./Section2/Section5/Section2/Custom');
        
            var vPage  = 2;
            var vLevel = 3;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section5/Section3/index')
        {
            var layout = require('./Section2/Section5/Section3/Layout');
            var custom = require('./Section2/Section5/Section3/Custom');
        
            var vPage  = 0;
            var vLevel = 3;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section5/Section3/Project1')
        {
            var layout = require('./Section2/Section5/Section3/Layout');
            var custom = require('./Section2/Section5/Section3/Custom');
        
            var vPage  = 1;
            var vLevel = 3;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section5/Section4/index')
        {
            var layout = require('./Section2/Section5/Section4/Layout');
            var custom = require('./Section2/Section5/Section4/Custom');
        
            var vPage  = 0;
            var vLevel = 3;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section5/Section4/Project1')
        {
            var layout = require('./Section2/Section5/Section4/Layout');
            var custom = require('./Section2/Section5/Section4/Custom');
        
            var vPage  = 1;
            var vLevel = 3;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section6/index')
        {
            var layout = require('./Section2/Section6/Layout');
            var custom = require('./Section2/Section6/Custom');
        
            var vPage  = 0;
            var vLevel = 2;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section6/Project1')
        {
            var layout = require('./Section2/Section6/Layout');
            var custom = require('./Section2/Section6/Custom');
        
            var vPage  = 1;
            var vLevel = 2;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section6/Section2/index')
        {
            var layout = require('./Section2/Section6/Section2/Layout');
            var custom = require('./Section2/Section6/Section2/Custom');
        
            var vPage  = 0;
            var vLevel = 3;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section6/Section2/Project1')
        {
            var layout = require('./Section2/Section6/Section2/Layout');
            var custom = require('./Section2/Section6/Section2/Custom');
        
            var vPage  = 1;
            var vLevel = 3;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section6/Section2/Section2/index')
        {
            var layout = require('./Section2/Section6/Section2/Section2/Layout');
            var custom = require('./Section2/Section6/Section2/Section2/Custom');
        
            var vPage  = 0;
            var vLevel = 4;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section6/Section2/Section2/Project1')
        {
            var layout = require('./Section2/Section6/Section2/Section2/Layout');
            var custom = require('./Section2/Section6/Section2/Section2/Custom');
        
            var vPage  = 1;
            var vLevel = 4;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section6/Section2/Section2/Project2')
        {
            var layout = require('./Section2/Section6/Section2/Section2/Layout');
            var custom = require('./Section2/Section6/Section2/Section2/Custom');
        
            var vPage  = 2;
            var vLevel = 4;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section6/Section2/Section2/Project3')
        {
            var layout = require('./Section2/Section6/Section2/Section2/Layout');
            var custom = require('./Section2/Section6/Section2/Section2/Custom');
        
            var vPage  = 3;
            var vLevel = 4;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section6/Section2/Section2/Project4')
        {
            var layout = require('./Section2/Section6/Section2/Section2/Layout');
            var custom = require('./Section2/Section6/Section2/Section2/Custom');
        
            var vPage  = 4;
            var vLevel = 4;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section6/Section2/Section2/Project5')
        {
            var layout = require('./Section2/Section6/Section2/Section2/Layout');
            var custom = require('./Section2/Section6/Section2/Section2/Custom');
        
            var vPage  = 5;
            var vLevel = 4;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section6/Section2/Section2/Project6')
        {
            var layout = require('./Section2/Section6/Section2/Section2/Layout');
            var custom = require('./Section2/Section6/Section2/Section2/Custom');
        
            var vPage  = 6;
            var vLevel = 4;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section6/Section2/Section2/Project7')
        {
            var layout = require('./Section2/Section6/Section2/Section2/Layout');
            var custom = require('./Section2/Section6/Section2/Section2/Custom');
        
            var vPage  = 7;
            var vLevel = 4;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section6/Section2/Section2/Project8')
        {
            var layout = require('./Section2/Section6/Section2/Section2/Layout');
            var custom = require('./Section2/Section6/Section2/Section2/Custom');
        
            var vPage  = 8;
            var vLevel = 4;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section6/Section2/Section2/Project9')
        {
            var layout = require('./Section2/Section6/Section2/Section2/Layout');
            var custom = require('./Section2/Section6/Section2/Section2/Custom');
        
            var vPage  = 9;
            var vLevel = 4;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section6/Section2/Section2/Project10')
        {
            var layout = require('./Section2/Section6/Section2/Section2/Layout');
            var custom = require('./Section2/Section6/Section2/Section2/Custom');
        
            var vPage  = 10;
            var vLevel = 4;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section2/Section6/Section2/Section2/Project11')
        {
            var layout = require('./Section2/Section6/Section2/Section2/Layout');
            var custom = require('./Section2/Section6/Section2/Section2/Custom');
        
            var vPage  = 11;
            var vLevel = 4;
            var vSection = 2;
            var vCSS = "Section2.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section3/index')
        {
            var layout = require('./Section3/Layout');
            var custom = require('./Section3/Custom');
        
            var vPage  = 0;
            var vLevel = 1;
            var vSection = 3;
            var vCSS = "Section3.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section3/Project1')
        {
            var layout = require('./Section3/Layout');
            var custom = require('./Section3/Custom');
        
            var vPage  = 1;
            var vLevel = 1;
            var vSection = 3;
            var vCSS = "Section3.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section3/Project2')
        {
            var layout = require('./Section3/Layout');
            var custom = require('./Section3/Custom');
        
            var vPage  = 2;
            var vLevel = 1;
            var vSection = 3;
            var vCSS = "Section3.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section3/Project3')
        {
            var layout = require('./Section3/Layout');
            var custom = require('./Section3/Custom');
        
            var vPage  = 3;
            var vLevel = 1;
            var vSection = 3;
            var vCSS = "Section3.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section3/Project4')
        {
            var layout = require('./Section3/Layout');
            var custom = require('./Section3/Custom');
        
            var vPage  = 4;
            var vLevel = 1;
            var vSection = 3;
            var vCSS = "Section3.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/Section3/Project5')
        {
            var layout = require('./Section3/Layout');
            var custom = require('./Section3/Custom');
        
            var vPage  = 5;
            var vLevel = 1;
            var vSection = 3;
            var vCSS = "Section3.css";
            res.write( layout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(req.url == '/favicon.ico')
        {
            fs.readFile('favicon.ico', 
                function(err, data) 
                {
                    res.writeHead(200, {'Content-Type': 'image/html'});
                    res.write(data);
                    res.end();
                });
        }
        else if(req.url == '/logo_HouseThatKamuraiBuilt_blueonblack.jpg')
        {
            fs.readFile('logo_HouseThatKamuraiBuilt_blueonblack.jpg', 
                function(err, data) 
                {
                    res.writeHead(200, {'Content-Type': 'image/html'});
                    res.write(data);
                    res.end();
                });
        }
        else if(req.url == '/Main.css')
        {
            fs.readFile('Main.css', 
                function(err, data) 
                {
                    res.writeHead(200, {'Content-Type': 'text/css'});
                    res.write(data);
                    res.end();
                });
        }
        else if(req.url == '/Section1/Section1.css')
        {
            fs.readFile('Section1/Section1.css', 
                function(err, data) 
                {
                    res.writeHead(200, {'Content-Type': 'text/css'});
                    res.write(data);
                    res.end();
                });
        }
        else if(req.url == '/Section2/Section2.css')
        {
            fs.readFile('Section2/Section2.css', 
                function(err, data) 
                {
                    res.writeHead(200, {'Content-Type': 'text/css'});
                    res.write(data);
                    res.end();
                });
        }
        else if(req.url == '/Section3/Section3.css')
        {
            fs.readFile('Section3/Section3.css', 
                function(err, data) 
                {
                    res.writeHead(200, {'Content-Type': 'text/css'});
                    res.write(data);
                    res.end();
                });
        }
        
        
        /*
        fs.readFile('index.html', 
        function(err, data) 
        {
            res.writeHead(200, {'Content-Type': 'text/html'});
            
            
            res.write(data);
            res.end();
        });
        */
    }
).listen(84); //the server object listens on port 84