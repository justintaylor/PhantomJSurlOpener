@ECHO off

cd phantomJS
phantomjs.exe --local-storage-path=%~dp0 ..\urls.js
cd ..

rem pause