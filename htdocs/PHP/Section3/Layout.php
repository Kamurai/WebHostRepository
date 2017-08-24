<?php
	include '~/Universal.php';
	include './Custom.php';
	
    function WriteLayout($Page, $Level, $Section)
    {
        echo "
        <html>
        ";
        WriteHeader();
        Title($Page);
        echo "
        <body id=\'idBody\'>
            <table id=\"idTableMain\">
                <tr id=\"idHeaderRow\">
                    <td id=\"idHeaderRowCenter\" colspan=\"3\">
            ";
                        Logo($Level)
                    echo "
                    </td>
                </tr>
                <tr id=\"idNavigationRow\">
                    <td id=\"idNavigationBar\" colspan=\"3\">
                 ";
                        NavBar();
                echo "
                    </td>
                </tr>				
                <tr id=\"idCenterRow\">
                    <td id=\"idCenterRowLeft\">
                        <h4>
                ";
                           NavigationHeader();
                echo "
                        </h4>
                ";
                        Navigation($Page);
                echo "
                    </td>
                    <td id=\"idCenterRowMain\">
                        <h2>
                ";
                            ContentHeader($Page);
                echo "
                        </h2>
                        <p id=\"idCenterContent\">
                ";
                            Content($Page);
                echo "
                        </p>
                    </td>
                    <td id=\"idCenterRowRight\">
                        <h4>
                ";
                            InfoHeader();
                echo "
                        </h4>
                ";
                        InfoLanguage();
                        Versions($Page)
                echo "
                    </td>
                </tr>
                <tr id=\"idFooterRow\">
                    <td id=\"idFooterMain\" colspan=\"3\">
                        <p id=\"idFooterContent\">
                ";
                            GDR();
                            WinRar();
                            Footer();
                echo "
                        </p>
                        <p id=\"idFooterManagement\">
                ";
                            Management();
                echo "
                        </p>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        ";
    }
?>