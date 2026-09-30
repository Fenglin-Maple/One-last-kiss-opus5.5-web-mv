@echo off
setlocal EnableDelayedExpansion
rem One Last Kiss - Web MV v4 launcher: opens the MV in an app window with autoplay allowed.
set "HTML=%~dp0index.html"
set "U=%HTML:\=/%"
set "U=!U: =%%20!"
set "URL=file:///!U!"
set "PROF=%TEMP%\olk-mv4"
set "B="
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" set "B=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
if not defined B if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" set "B=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
if not defined B if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" set "B=%LocalAppData%\Google\Chrome\Application\chrome.exe"
if not defined B if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" set "B=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"
if not defined B if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" set "B=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"
if not defined B goto fallback
start "" "!B!" --user-data-dir="%PROF%" --autoplay-policy=no-user-gesture-required --no-first-run --no-default-browser-check --start-maximized --app="!URL!"
goto :eof
:fallback
rem No Chrome/Edge found: open with the default browser (click once to start if autoplay is blocked)
start "" "%HTML%"
