// node服务
const express = require('express')
const Vue = require('vue')

const app = express()

// 创建渲染器
const renderer = require('vue-server-renderer').createRenderer()

// 将来用渲染器渲染page可以得到html内容
const page = new Vue({
  template: '<div>hello</div>'
})

app.get('/', async (req, res) => {
  try {
    const html = await renderer.renderToString(page)
    res.send(html)
  } catch (error) {
    res.status(500).send('服务器内部错误')
  }
})

app.listen(3000, () => {
  console.log('server run success')
})