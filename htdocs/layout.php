<?php
	include $path.'Universal.php';
	
	echo "
	<link href=\"".$style."Main.css\" rel=\"stylesheet\" type=\"text/css\">
	<title>$title</title>
	<table id=\"idTableMain\">
        <tr id=\"idHeaderRow\">
            <td id=\"idHeaderRowCenter\" colspan=\"3\">
                <img id=\"idLogo\" src='".$path."logo_HouseThatKamuraiBuilt_blueonblack.jpg'><br>
			</td>
		</tr>
		<tr id=\"idNavigationRow\">
            <td id=\"idNavigationBar\" colspan=\"3\">
         ";
                include $path.'navBar.php';
		echo "
			</td>
        </tr>				
		<tr id=\"idCenterRow\">
            <td id=\"idCenterRowLeft\">
                <h4>
		";
                    echo $navHeader;
		echo "
				</h4>
		";
				include './navigationContent.php';
		echo "
			</td>
            <td id=\"idCenterRowMain\">
            	<h2>
		";
					echo $centerHeader;
		echo "
				</h2>
				<p id=\"idCenterContent\">
		";
										echo $centerContent;
		echo "
				</p>
			</td>
			<td id=\"idCenterRowRight\">
                <h4>
		";
					echo $infoHeader;
		echo "
				</h4>
		";
				echo $infoContent;
		echo "
			</td>
		</tr>
        <tr id=\"idFooterRow\">
            <td id=\"idFooterMain\" colspan=\"3\">
                <p id=\"idFooterContent\">
		";
                    echo $GDR;
                    echo $winrar;
                    echo $footer;
		echo "
				</p>
				<p id=\"idFooterManagement\">
        ";
                    echo $management;
		echo "
				</p>
            </td>
        </tr>
    </table>
    </body>
	";
?>