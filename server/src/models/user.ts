module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user', {
    uid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    uname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    pwd: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    sex: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    nickname: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    last_login_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    mobile: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    is_del: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
    },
    stat: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
    },
    is_email_confirmed: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0',
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'user',
  })
}
