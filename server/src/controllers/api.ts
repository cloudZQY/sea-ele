import { Context } from 'koa'
export let Get = async (ctx: Context) => {
  ctx.body = {
    result: 'get',
    name: ctx.params.name,
    para: ctx.query,
  }
}

export let Post = async (ctx: Context) => {
  ctx.body = {
    result: 'post',
    name: ctx.params.name,
    para: ctx.request.body,
  }
}

export let Put = (ctx: Context) => {
  ctx.body = {
    result: 'put',
    name: ctx.params.name,
    para: ctx.request.body,
  }
}

export let Delect = (ctx: Context) => {
  ctx.body = {
    result: 'delect',
    name: ctx.params.name,
    para: ctx.request.body,
  }
}
