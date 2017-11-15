
CREATE TABLE IF NOT EXISTS `user` (
  `uid` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `uname` varchar(100) NOT NULL COMMENT '用户名',
  `pwd` varchar(200)  NOT NULL COMMENT '密码',
  `email` varchar(200)  NOT NULL COMMENT '邮箱',
  `avatar` varchar(500)  NOT NULL COMMENT '头像图片',
  `birthday` datetime DEFAULT NULL COMMENT '生日',
  `name` varchar(200) DEFAULT NULL COMMENT '姓名',
  `sex` tinyint(1) DEFAULT NULL COMMENT '性别, 1:男，2:女，3：保密',
  `nickname` varchar(200) DEFAULT NULL COMMENT '昵称',
  `last_login_date` datetime DEFAULT NULL COMMENT '最后登录时间',
  `mobile` varchar(50) DEFAULT NULL COMMENT '手机',
  `is_del` tinyint(1) DEFAULT 0 COMMENT '是否删除',
  `stat` tinyint(1) DEFAULT 0 COMMENT '用户状态，01:正常，02:冻结',
  `is_email_confirmed` tinyint DEFAULT 0 COMMENT '是否绑定邮箱',
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间',
  `update_date` datetime ON UPDATE CURRENT_TIMESTAMP COMMENT '修改日期',
  PRIMARY KEY (`uid`),
  UNIQUE KEY `uname` (`uname`),
  KEY `mobile` (`mobile`),
  KEY `idx_email` (`email`,`uid`),
  KEY `idx_create_date` (`create_date`,`UID`),
  KEY `idx_update_date` (`update_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';

INSERT INTO `USER` (
  `uname`,
  `email`,
  `pwd`,
  `avatar`
) VALUES (
  'admin',
  'admin@admin.com',
  'admin',
  'https://dn-mdpic.qbox.me/UserAvatar/fd5a781e-2788-4baa-85cf-d56f64a2cf0c.png'
)