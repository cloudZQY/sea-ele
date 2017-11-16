import * as Sequelize from 'Sequelize'
import sequelize from './sequelize'

const User = sequelize.define('user', {
  uid: {
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  uname: {
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: true,
  },
  pwd: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  avatar: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  birthday: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  name: {
    type: Sequelize.STRING(200),
    allowNull: true,
  },
  sex: {
    type: Sequelize.INTEGER(1),
    allowNull: true,
  },
  nickname: {
    type: Sequelize.STRING(200),
    allowNull: true,
  },
  last_login_date: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  mobile: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  is_del: {
    type: Sequelize.INTEGER(1),
    allowNull: true,
    defaultValue: '0',
  },
  stat: {
    type: Sequelize.INTEGER(1),
    allowNull: true,
    defaultValue: '0',
  },
  is_email_confirmed: {
    type: Sequelize.INTEGER(4),
    allowNull: true,
    defaultValue: '0',
  },
  create_date: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  },
  update_date: {
    type: Sequelize.DATE,
    allowNull: true,
  },
}, {
  tableName: 'user',
  timestamps: false,
})

export default User
