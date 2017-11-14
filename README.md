### 全局package依赖
`typescript` `concurrently`

### 启动步骤
``` shell
yarn global add typescript concurrently
yarn
yarn start
```

### 前后端开发启动
`yarn start`

### 前端开发启动
`yarn client-dev`

### 后端开发启动
`yarn server-dev`

### 后端调试
vscode： 点击调试，添加配置，配置中添加
``` json
{
  "type": "node",
  "request": "launch",
  "name": "Launch Program",
  "sourceMaps": true,
  "program": "${workspaceFolder}/server/build/dev-server.js",
  "outFiles": [ 
    "${workspaceFolder}/server/dist/**/*.js"
  ]
}
```
然后 `tsc启动后端编译就可以在vscode中调试`