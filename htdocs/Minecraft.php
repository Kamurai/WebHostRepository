<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <link href="./Main.css" rel="stylesheet" type="text/css">
</head>
<font color="white">
<body id="idBody">
<?php
	include 'Path.php';
	
	$title = "Minecraft!";
	$centerHeader = "Minecraft!";
	$centerContent = "
						If you would like to play Minecraft with us, we have several different servers:</br>
						Mo Creatures Server: (1.7.10) htkb.dyndns.org:25565</br>
						Creative Server:     (1.7.10) htkb.dyndns.org:25567</br>
							This is a list of mods that we are using on the server, compatible with 1.7.10.</br>
							<a href='./Downloads/Minecraft/forge-1.7.10-10.13.3.1401-1710ls-installer.jar'>Forge 1.7.10</a></br>
							<a href='./Downloads/Minecraft/DrZharks MoCreatures Mod v6.3.1.zip'>Dr Zhark's Mo Creatures</a></br>
							<a href='./Downloads/Minecraft/CustomMobSpawner 3.3.0.zip'>Custom Mob Spawner</a></br>
							<a href='./Downloads/Minecraft/[1.7.10]Gender-1.0.2.jar'>iPixeli's Gender Mod</a></br>
							<a href='./Downloads/Minecraft/BspkrsCore-1.7.10.jar'>Bspkrs Core</a></br>
							<a href='./Downloads/Minecraft/[1.7.10]Treecapitator-universal-2.0.4.jar'>Tree Capitator</a></br>
							<a href='./Downloads/Minecraft/MoarFood-5.8.0.jar'>Moar Food</a></br>
							<a href='./Downloads/Minecraft/MoarOres-2.4.5.jar'>Moar Ores</a></br>
							<a href='./Downloads/Minecraft/BiblioCraft[v1.10.4][MC1.7.10].jar'>Biblio Craft</a></br>
							<a href='./Downloads/Minecraft/Fossils_Archeology_Revival-1.7.10_Build-6.4b.jar'>Fossils and Archaeology</a></br>
							<a href='./Downloads/Minecraft/Reis-Minimap-Mod-1.7.10.jar'>Rei's Minimap</a></br>
							<a href='./Downloads/Minecraft/Xaeros_Minimap_1.10.8_Forge_1.7.10.jar'>Xaero's Minimap</a></br>
						Vanilla Server:      (1.10.2) htkb.dyndns.org:25566</br>
						Come Alive Server:   (1.10.2) htkb.dyndns.org:25568</br>
							This is a list of mods that we are using on the server, compatible with 1.10.2.</br>
							<a href='./Downloads/Minecraft/forge-1.10.2-12.18.1.2011-installer.jar'>Forge 1.10.2</a></br>
							<a href='./Downloads/Minecraft/RadixCore-1.10.2-2.1.2-universal.jar'>Radix Core</a></br>
							<a href='./Downloads/Minecraft/MCA-1.10.2-5.2.1-universal.jar'>Minecraft Comes Alive</a></br>
							<a href='./Downloads/Minecraft/Xaeros_Minimap_1.10.8_Forge_1.10.2.jar'>Xaero's Minimap</a></br>
						Pixelmon Server:     (1.8.9)  htkb.dyndns.org:25569</br>
							This is a list of mods that we are using on the server, compatible with 1.8.9.</br>
							<a href='./Downloads/Minecraft/forge-1.8.9-11.15.1.1902-1.8.9-installer.jar'>Forge 1.8.9</a></br>
							<a href='./Downloads/Minecraft/Pixelmon-1.8.9-4.2.7-universal.jar'>Pixelmon</a></br>
							<a href='./Downloads/Minecraft/Xaeros_Minimap_1.10.8_Forge_1.8.9.jar'>Xaero's Minimap</a></br>
							<a href='./Downloads/Minecraft/PixelExtras-1.8.9-2.1.5-universal.jar'>Pixelmon Extras</a></br>
						ArkCraft Server:     (1.8) htkb.dyndns.org:25570</br>
							This is a list of mods that we are using on the server, compatible with 1.8.</br>
							<a href='./Downloads/Minecraft/forge-1.8-11.14.4.1577-installer.jar'>Forge 1.8</a></br>
							<a href='./Downloads/Minecraft/arkcraft-1.1.3-beta.jar'>Ark Craft</a></br>
						Here is a skin template to make custom skins:</br>
						<a href='./Downloads/Minecraft/skin_template.png'>Steve skin template</a></br>
					<br/>
					<br/>
						For first time setups, please follow these steps to make your client compatible with the server:</br>
							 0) If you don't have Minecraft, go to Minecraft.net and download the latest version of the launcher.</br>
							 1) From the launcher create a new profile and change its version to the relevant version (e.g. 1.7.10).</br>
							 2) Save the Profile, select the new profile and click play.</br>
							 3) Exit the program.</br>
							 4) Install Forge.  If it is not automatically selected, then browse to your .minecraft folder.</br>
								Windows: It is in a hidden folder: c:\Users\*Username*\Appdata\Roaming\.minecraft</br>
								Mac: \"Go to\" ~/Library/Application Support/minecraft</br>
							 5) If you are managing multiple non-compatible mods, then you man have to make folders like:</br>
								\"..\Roaming\ComeAlive\"</br>
								\"..\Roaming\Pixelmon\"</br>
								\"..\Roaming\ArkCraft\"</br>
							 6) If your folder doesn't have a /Mods folder, create one. Place the files from the mod list into the /mods folder.</br>
								Even if it works, don't put two minimap mods in the same folder.</br>
							 7) Open the Minecraft Launcher, edit your version (e.g. 1.7.10) profile to use the forge version of the same.</br>
							 8) If you are using a different folder, then remember to change the Game Directory in the profile.</br>
								For Pixelmon, then you'll also have to change the Java argument -Xmx1G to -Xmx2G.
							 9) Save the Profile, select the new profile and click play.</br>
							10) You should see the mods listed on the side of the Minecraft window.</br>
							11) Go to multiplayer and click add server.</br>
							12) Name the server something distinct and put \"htkb.dyndns.org:2556x\" in the address bar where 'x' is the relevant port.</br>
							13) Save the server entry.  You should see a connection to the server.  Double click to join.</br>
					
                    ";
	$GDR = "";
	$winrar = "";
	
	$infoContent = "This is written with PHP.<br><br>
					Other versions of this page are here:<br>
					<a href=\"http://htkb.dyndns.org/Minecraft.html\">HTML</a><br>
					<a href=\"http://htkb.dyndns.org/Javascript/Minecraft.html\">HTML Javascript</a><br>
					<a href=\"http://htkb.dyndns.org:81/ASP/Minecraft.asp\">ASP Javascript</a><br>
					<a href=\"http://htkb.dyndns.org:81/ASPNET/Minecraft.aspx\">ASP.NET Javascript</a><br>
					<a href=\"http://htkb.dyndns.org/Minecraft.shtml\">Perl</a><br>
					<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Minecraft.jsp\">JSP</a><br>
					<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Minecraft.xhtml\">JSF</a><br>
					<a href=\"http://htkb.dyndns.org:81/WebApplication/Minecraft.cshtml\">ASP.NET Web App</a><br>
					<a href=\"http://htkb.dyndns.org:81/WebForm/Minecraft.aspx\">ASP.NET Webform</a><br>
					<a href=\"http://htkb.dyndns.org:81/MVC/Main/Minecraft\">ASP.NET MVC App</a><br>
					<a href=\"http://htkb.dyndns.org/SSI/Minecraft.html\">Apache SSI</a><br>
				";
	

	#Overall body
	include $style.'Layout.php';
?>
</body>
</font>
</html>