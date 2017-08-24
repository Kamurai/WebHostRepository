@ECHO OFF

REM Copying the lib files to pkglibdir
move %1\lib\slony1_funcs.dll C:\xampp\pgsql\lib
move %1\lib\slevent.dll C:\xampp\pgsql\lib

REM Creating file removal scripts to run at the time of uninstallation
REM Remove these files installed in the lib directory 
echo @ECHO OFF > %1/Slony/installer/Slony/removeFiles.bat
echo "cd C:\xampp\pgsql\lib && del /S /Q slevent.dll slony1_funcs.dll" >> %1/Slony/installer/Slony/removeFiles.bat
echo "cd C:\xampp\pgsql\share && FOR /F %%%%A IN ('dir /b slony1_*.*sql') DO (del /S /Q %%%%A)" >> %1/Slony/installer/Slony/removeFiles.bat

cd %1\share\Slony && move * C:\xampp\pgsql\share && cd %1\share && rd /S /Q Slony

