### 全局package依赖
`typescript` `concurrently`

### 启动步骤
``` shell
yarn global add typescript concurrently ts-node ts-node-dev
yarn
yarn start
```
### 数据库
安装mysql数据库，config在server/config/index里
约定用户名root 密码root
CREATE DATABASE sea_ele
source server/db/init.db

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
  "name": "ts-node",
  "type": "node",
  "request": "launch",
  "protocol": "inspector",
  "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/ts-node",
  "runtimeArgs": [
      "${workspaceRoot}/server/src/app.ts"
  ]
}
```
然后 `tsc启动后端编译就可以在vscode中调试`