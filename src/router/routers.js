const routers = [{
  path: '/',
  name: 'index',
  component (resolve) {
    require.ensure(['../App.vue'], () => {
      resolve(require('../App.vue'))
    })
  },

  children: [{
    path: '/welfare',
    name: 'welfare',
    component (resolve) {
      require.ensure(['../components/welfare/welfare.vue'], () => {
        console.log('router welfare')
        resolve(require('../components/welfare/welfare.vue'))
      })
    }
  }, {
    path: '/day',
    name: 'day',
    component (resolve) {
      require.ensure(['../components/recommend/recommend.vue'], () => {
        console.log('router day')
        resolve(require('../components/recommend/recommend.vue'))
      })
    },
    meta: {
      requiresAuth: true
    }
  }, {
    path: '/ios',
    name: 'ios',
    component (resolve) {
      require.ensure(['../components/lists/ios.vue'], () => {
        console.log('router ios')
        resolve(require('../components/lists/ios.vue'))
      })
    },
    meta: {
      requiresAuth: true
    }
  }, {
    path: '/android',
    name: 'android',
    component (resolve) {
      require.ensure(['../components/lists/android.vue'], () => {
        console.log('router android')
        resolve(require('../components/lists/android.vue'))
      })
    }
  }, {
    path: '/web',
    name: 'web',
    component (resolve) {
      require.ensure(['../components/lists/web.vue'], () => {
        console.log('router web')
        resolve(require('../components/lists/web.vue'))
      })
    }
  }, {
    path: '/welcome',
    name: 'welcome',
    component (resolve) {
      require.ensure(['../components/welcome/welcome.vue'], () => {
        console.log('router welcome')
        resolve(require('../components/welcome/welcome.vue'))
      })
    }
  }]
}]

export default routers
