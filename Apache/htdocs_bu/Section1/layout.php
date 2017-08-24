<?php
	include '../info.php';
	
	echo "
	<title>$title</title>
	<link href='./moo.css' rel='stylesheet' type='text/css'>
	<!--Centered division.-->
	<div align='center'>
		<!--Table to place all subsections-->
		<table width='100%' cellpadding='0px' cellspacing='0px' border='0' align='center'>
			<tbody>
				<!--Top Row-->
				<tr>
					<!--Center Sub Section-->
					<td class='td-header' colspan='3' alt='' valign='top'>
						<p align='center'>
							<!--Primary Header: Main Splash / Logo-->
							<img src='../logo_HouseThatKamuraiBuilt_blueonblack.jpg' width='100%' alt='' border='0' align='center' vspace='0' hspace='0'><br>
						</p>
					</td>
				</tr>
				<!--2nd Row-->
				<tr>
					<!--NavBar-->
					<td class='td-navbar' colspan='3' alt=''>
		";
						include './navBar.php';
		echo "
					</td>
				</tr>				
				<!--3rd Row-->
				<tr>
					<!--Left Sub Section-->
					<td class='td-left' valign='top'>
						<div align='center'>
							<div class='left-box'>
								<div class='navlinks'>
									<h4>
		";
										echo $navHeader;
		echo "
									</h4>
		";
										include './navigationContent.php';
		echo "
								</div>
							</div>
						</div>
					</td>
					<!--Center Sub Section-->
					<td class='td-content'>
						<div align='center'>
							<div class='content-box'>
								<div>
									<h2>
		";
										echo $centerHeader;
		echo "
									</h2>
									<p align='left'>
		";
										echo $centerContent;
		echo "
									</p>
								</div>
								<br>
								<br>
							</div>
						</div>
					</td>
					<!--Right Sub Section-->
					<td class='td-right' valign='top'>
						<div align='center'>
							<div class='right-box'>
								<h4>
		";
									echo $infoHeader;
		echo "
								</h4>
							</div>
						</div>
					</td>
				</tr>
				<!--4th Row-->
				<tr>
					<!--Center Sub Section-->
					<td class='td-footer' colspan='3'>
						<div align='center'>
							<div class='footer-box'>
								<p align='center'>
		";
									echo $winrar;
		echo "
									<br>
		";
									echo $footer;
		echo "
								</p>
								<p align='left'>
									<font size='1'>
		";
		
									echo $management;
		echo "
									</font>
								</p>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	";
?>