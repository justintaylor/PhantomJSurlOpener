@ECHO off
cd phantomJS
phantomjs.exe --local-storage-path=C:\git\jsBasedPhantomJS ..\urls.js
cd ..

rem pause