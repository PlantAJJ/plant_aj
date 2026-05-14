@echo off
:: Sets the local git hooks directory to .githooks for this project.

:: ── ensure we're inside a git repo ────────────────────────────────────────────


set HOOKS_DIR=.githooks

:: ── create the directory if it doesn't exist ──────────────────────────────────
if not exist "%HOOKS_DIR%\" (
   exit /b 1
)

:: ── configure git to use it ───────────────────────────────────────────────────
git config core.hooksPath "%HOOKS_DIR%"
if errorlevel 1 (
    echo Error: failed to set git hooks path.
    exit /b 1
)

echo [OK] Git hooks path set to '%HOOKS_DIR%' for this project.
echo      Place your hooks in %CD%\%HOOKS_DIR%
echo      Note: hook files need no extension on Windows when run via Git Bash/MINGW.

set FOUND=0
for /r "%HOOKS_DIR%" %%F in (*) do (
    git update-index --chmod=+x "%%F" 2>nul
    echo   marked executable: %%F
    set FOUND=1
)
if "%FOUND%"=="0" (
    echo   ^(no hook files found in %HOOKS_DIR% yet^)
)