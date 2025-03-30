Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "notepad.exe actual.txt", 1, false
WshShell.Run "cmd /c script.bat", 0, false