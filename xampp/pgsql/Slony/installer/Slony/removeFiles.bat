@ECHO OFF 
cd C:\xampp\pgsql\lib && del /S /Q slevent.dll slony1_funcs.dll 
cd C:\xampp\pgsql\share && FOR /F %%A IN ('dir /b slony1_*.*sql') DO (del /S /Q %%A) 
