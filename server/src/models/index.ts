import * as fs from 'fs'
import * as path from 'path'
import * as Sequelize from 'Sequelize'
import { DB } from '../config'

type IDb = {
  sequelize?: any,
  Sequelize?: any,
  [key: string]: any,
}
const db: IDb = {}
const sequelize = new Sequelize(DB.database, DB.username, DB.password, {
  host: DB.host,
  dialect: 'mysql',
  operatorsAliases: false,
  poll: {
    max: 5,
    min: 0,
    idle: 10000,
  },
})

fs
  .readdirSync(__dirname)
  .forEach(function (file) {
    if ((file.indexOf('.') !== 0) && (!file.match(/^index\.|\.map$/))) {
      const model = sequelize.import(path.join(__dirname, file))
      db[model.name] = model
    }
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
