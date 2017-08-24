@echo off

REM PostgreSQL server psql runner script for Windows
REM Dave Page, EnterpriseDB

SET server=localhost
SET /P server="Server [%server%]: "

SET database=postgres
SET /P database="Database [%database%]: "

SET port=5432
SET /P port="Port [%port%]: "

SET username=postgres
SET /P username="Username [%username%]: "

REM Run psql
"C:\xampp\pgsql\bin\psql.exe" -h %server% -U %username% -d %database% -p %port%

pause

