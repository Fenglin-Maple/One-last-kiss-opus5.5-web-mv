@echo off
setlocal EnableDelayedExpansion
rem One Last Kiss - Web MV v6 RECORDING launcher for OBS: fullscreen, 2560x1440 render, no UI/cursor, CC zh+ja on.
rem Start recording in OBS first, then click the button (or press Enter) in the window.
set "HTML=%~dp0index.html"
set "U=%HTML:\=/%"
set "U=!U: =%%20!"
set "URL=file:///!U!?rec=1"
set "PROF=%TEMP%\olk-mv6-rec"
set "B="
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" set "B=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
if not defined B if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" set "B=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
if not defined B if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" set "B=%LocalAppData%\Google\Chrome\Application\chrome.exe"
if not defined B if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" set "B=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"
if not defined B if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" set "B=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"
if not defined B goto fallback
start "" "!B!" --user-data-dir="%PROF%" --autoplay-policy=no-user-gesture-required --no-first-run --no-default-browser-check --start-fullscreen --app="!URL!"
goto :eof
:fallback
rem No Chrome/Edge found: open with the default browser (click once to start if autoplay is blocked)
echo Chrome / Edge not found. Open index.html?rec=1 in Chrome manually.
pause
