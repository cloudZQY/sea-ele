import * as Sequelize from 'Sequelize'
import { DB } from '../config'

const sequelize = new Sequelize(DB.database, DB.username, DB.password, {
  host: DB.host,
  dialect: 'mysql',
  operatorsAliases: false,
})

export default sequelize
