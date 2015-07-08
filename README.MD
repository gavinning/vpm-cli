#VPM-CLI


安装  

```
npm install vpm-cli --save

```

使用  

```
var cli = require('vpm-cli');

cli
    .reg('install', 'vpm-command-install')
    .reg('publish', 'vpm-command-publish')

cli.run(process.argv);
```
