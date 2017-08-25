<?php

    function WriteHeader($Level, $Section)
    {
        $Result = '
        <head>
            <meta http-equiv=\'Content-Type\' content=\'text/html; charset=ISO-8859-1\'>
        '.CSS($Level, $Section).'
        </head>
        ';
        
        return $Result;
    }

    function CSS($Level, $Section)
    {
        $Result = '';
        
        if( $Section == 0 )
        {
            $Result = '<link href=\'';
            $Result = $Result.Path($Level);
            $Result = $Result.CSSFile($Section);
            $Result = $Result.'\' rel=\'stylesheet\' type=\'text/css\'>';
        }
        else
        {
            $Result = '<link href=\'';
            $Result = $Result.StylePath($Level);
            $Result = $Result.CSSFile($Section);
            $Result = $Result.'\' rel=\'stylesheet\' type=\'text/css\'>';
        }
        
        return $Result;
    }
    
    function CSSFile($Section)
    {
        $Result = '';
        
        if($Section == 0)
        {
            $Result = 'Main.css';
        }
        else if($Section == 1)
        {
            $Result = 'Section1.css';
        }
        else if($Section == 2)
        {
            $Result = 'Section2.css';
        }
        else if($Section == 3)
        {
            $Result = 'Section3.css';
        }
        
        return $Result;
    }
    
    function Logo($Level)
    {
        $Result = '<img id=\'idLogo\' src=\''.Path($Level).'logo_HouseThatKamuraiBuilt_blueonblack.jpg\'>';
        
        return $Result;
    }

    function NavBar($Level)
    {
        $Result = '
            <a class=\'navBar\' href=\''.Path($Level).'index.php\'>Home</a>
            <a class=\'navBar\' href=\''.Path($Level).'Section1/index.php\'>Web Programming</a>
            <a class=\'navBar\' href=\''.Path($Level).'Section2/index.php\'>Private Projects</a>
            <a class=\'navBar\' href=\''.Path($Level).'Section3/index.php\'>Downloadable Projects</a>
        ';
        
        return $Result;
    }

    function GDR()
    {
        $Result = '<a href=\'../Downloads/GDR.zip\'>You can download my Games Development Report here.</a></br>';
	    
        return $Result;
    }

    function WinRar()
    {
        $Result = '<a href=\'../Downloads/wrar371.exe\'>You may need WinRar to open zip files from this site.</a></br>';
        
        return $Result;
    }

    function Footer()
    {
        $Result  = '<p id=\'idFooterContent\'>';
        $Result = $Result.'    © Copyright 2012 All rights reserved<br>';
        $Result = $Result.'    House That Kamurai Built<br>';
        $Result = $Result.'</p>';
        
        return $Result;
    }

    function Management()
    {
        $Result  = '<p id=\'idFooterManagement\'>';
        $Result = $Result.'    Website managed by Kamurai.';
        $Result = $Result.'</p>';
        
        return $Result;
    }
    
    function NavigationHeader()
    {
        $Result = '<h4>';
        $Result = $Result.'    Navigation';
        $Result = $Result.'</h4>';
        
        return $Result;
    }
    
    function InfoHeader()
    {
        $Result  = '<h4>';
        $Result = $Result.'    Information';
        $Result = $Result.'</h4>';
        
        return $Result;
    }
    
    function InfoLanguage()
    {
        $Result  = 'This is written with PHP.<br><br>';
        $Result = $Result.'Other versions of this page are here:<br>';
        
        return $Result;
    }
				
    function Path($Level)
    {
        $Result = '';
        
        if($Level == 0)
        {
            $Result = './';
        }
        else if($Level == 1)
        {
            $Result = '../';
        }
        else if($Level == 2)
        {
            $Result = '../../';
        }
        else if($Level == 3)
        {
            $Result = '../../../';
        }
        else if($Level == 4)
        {
            $Result = '../../../../';
        }
        else if($Level == 5)
        {
            $Result = '../../../../../';
        }
        else if($Level == 6)
        {
            $Result = '../../../../../../';
        }
        else if($Level == 7)
        {
            $Result = '../../../../../../../';
        }
        else if($Level == 8)
        {
            $Result = '../../../../../../../../';
        }
        else if($Level == 9)
        {
            $Result = '../../../../../../../../../';
        }
        else if($Level == 10)
        {
            $Result = '../../../../../../../../../../';
        }
        
        return $Result;
    }

    function StylePath($Level)
    {
        $Result = '';
        
        if($Level == 0)
        {
            $Result = './';
        }
        else if($Level == 1)
        {
            $Result = './';
        }
        else if($Level == 2)
        {
            $Result = '../';
        }
        else if($Level == 3)
        {
            $Result = '../../';
        }
        else if($Level == 4)
        {
            $Result = '../../../';
        }
        else if($Level == 5)
        {
            $Result = '../../../../';
        }
        else if($Level == 6)
        {
            $Result = '../../../../../';
        }
        else if($Level == 7)
        {
            $Result = '../../../../../../';
        }
        else if($Level == 8)
        {
            $Result = '../../../../../../../';
        }
        else if($Level == 9)
        {
            $Result = '../../../../../../../../';
        }
        else if($Level == 10)
        {
            $Result = '../../../../../../../../../';
        }
        
        return $Result;
    }
?>