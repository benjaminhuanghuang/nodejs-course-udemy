- Install evn-cmd
```
  npm i -D env-cmd
```
- Create script to load env veriables
```
"dev": "env-cmd ./config/dev.env nodemon src/index.js"
```