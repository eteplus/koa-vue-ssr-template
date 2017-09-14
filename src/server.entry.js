/* eslint-disable consistent-return, array-callback-return */
import { createApp } from './app'

export default context => new Promise((resolve, reject) => {
  const { app, router, store } = createApp()

  const { url } = context
  const { fullPath } = router.resolve(url).route
  if (url !== fullPath) {
    reject({ url: fullPath })
  }

  // set router's location
  router.push(url)

  // wait until router has resolved possible async hooks
  router.onReady(() => {
    const matchedComponents = router.getMatchedComponents()
    // no matched routes
    if (!matchedComponents.length) {
      reject({ code: 404 })
    }
    Promise.all(matchedComponents.map((component) => {
      if (component.asyncData) {
        return component.asyncData({
          store,
          route: router.currentRoute
        })
      }
    })).then(() => {
      context.state = store.state
      resolve(app)
    }).catch(reject)
  }, reject)
})
