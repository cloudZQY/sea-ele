import * as jwt from 'jsonwebtoken'
import * as fs from 'fs'
import * as path from 'path'
import { Context } from 'koa'
import User from '../models/user'

const publicKey = fs.readFileSync(path.join(__dirname, '../../publicKey.pub'))

interface ILoginByUnameBody {
  uname: string,
  pwd: string,
}
interface ILoginByEmailBody {
  email: string,
  pwd: string,
}

// 用户登录的时候返回token
function getToken (user) {
  return jwt.sign({
    userInfo: {
      uid: user.uid,
      uname: user.uname,
    },
  }, publicKey, {
    expiresIn: '7d',
  })
}

export let LoginByUname = async (ctx: Context) => {
  const {
    uname,
    pwd,
  } = (ctx.request.body as ILoginByUnameBody)
  const user = await User.findOne({
    where: {
      uname,
      pwd,
    },
  })
  if (user) {
    ctx.status = 200
    ctx.body = {
      token: getToken(user),
    }
  }
  if (!user) {
    ctx.status = 401
    ctx.body = {
      errInfo: '用户名或密码错误',
    }
  }
}

export let LoginByEmail = async (ctx: Context) => {
  const {
    email,
    pwd,
  } = (ctx.request.body.fields as ILoginByEmailBody)
  const user = await User.findOne({
    where: {
      email,
      pwd,
    },
  })
  if (user) {
    ctx.status = 200
    ctx.body = {
      token: getToken(user),
    }
  }
  if (!user) {
    ctx.status = 401
    ctx.body = {
      errInfo: '用户名或密码错误',
    }
  }
}

const Login = (ctx) => {
  switch (ctx.params.action) {
    case 'loginByUname':
      return LoginByUname(ctx)
    case 'loginByEmail':
      return LoginByEmail(ctx)
  }
}

export default Login
