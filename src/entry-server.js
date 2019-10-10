// 服务端入口，运行于服务器
import createApp from './app'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()

    // 进入首屏, 比如输入/detail, 那么router.push('/detail')
    router.push(context.url)
    router.onReady(() => {
      resolve(app)
    }, reject)
  })
}