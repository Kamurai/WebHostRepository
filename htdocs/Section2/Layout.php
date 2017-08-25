<?php
	include './Custom.php';
	
    function WriteLayout($Page, $Level, $Section)
    {
        echo '
        <html>
        ';
        echo WriteHeader($Level, $Section);
        echo '
        <body id=\'idBody\'>
            <table id=\'idTableMain\'>
                <tr id=\'idHeaderRow\'>
                    <td id=\'idHeaderRowCenter\' colspan=\'3\'>
            ';
                        echo Logo($Level);
                    echo '
                    </td>
                </tr>
                <tr id=\'idNavigationRow\'>
                    <td id=\'idNavigationBar\' colspan=\'3\'>
                 ';
                        echo NavBar($Level);
                echo '
                    </td>
                </tr>				
                <tr id=\'idCenterRow\'>
                    <td id=\'idCenterRowLeft\'>
                ';
                        echo NavigationHeader();
                        echo Navigation($Level);
                echo '
                    </td>
                    <td id=\'idCenterRowMain\'>
                    ';
                    echo Title($Page);
                        echo '
                        <h2>
                ';
                            echo ContentHeader($Page);
                echo '
                        </h2>
                        <p id=\'idCenterContent\'>
                ';
                            echo Content($Page);
                echo '
                        </p>
                    </td>
                    <td id=\'idCenterRowRight\'>
                        <h4>
                ';
                            echo InfoHeader();
                echo '
                        </h4>
                ';
                        echo InfoLanguage();
                        echo Versions($Page);
                echo '
                    </td>
                </tr>
                <tr id=\'idFooterRow\'>
                    <td id=\'idFooterMain\' colspan=\'3\'>
                ';
                        echo GDR();
                        echo WinRar();
                        echo Footer();
                        echo Management();
                echo '
                    </td>
                </tr>
            </table>
        </body>
        </html>
        ';
    }
?>