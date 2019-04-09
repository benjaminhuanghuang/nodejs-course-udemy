

## Debug using Node Inspector
1. Insert debugger; into source code.

2. Start node inspect
```
  $ node inspect app.js
```
3. Open "chrome://inspect" in chrom

  $ node debug playground/debugging.js
  n : next 
  c : continue
  quit
  repl
  rettart

Or
1. Start node inspect
```
  $ node inspect app.js
```
2. Open "chrome://inspect" in chrom
3. Set breakpoint in Chrome

## Debug in VS code
1. Add DEBUG cofiguration
```
{
  "type": "node",
  "request": "launch",
  "name": "task-rest-api",
  "program": "${workspaceFolder}/task-rest-api/src/index.js",
  "console": "integratedTerminal"
}
```

2. Add breakpoint in VS code and debug