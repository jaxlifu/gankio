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
    name: 'walfare',
    component (resolve) {
      require.ensure(['../components/welfare/welfare.vue'], () => {
        resolve(require('../components/welfare/welfare.vue'))
      })
    }
  }, {
    path: '/day',
    name: 'day',
    component (resolve) {
      require.ensure(['../components/day/day.vue'], () => {
        resolve(require('../components/day/day.vue'))
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
        resolve(require('../components/lists/android.vue'))
      })
    }
  }, {
    path: '/web',
    name: 'web',
    component (resolve) {
      require.ensure(['../components/lists/web.vue'], () => {
        resolve(require('../components/lists/web.vue'))
      })
    }
  }, {
    path: '/welcome',
    name: 'welcome',
    component (resolve) {
      require.ensure(['../components/welcome/welcome.vue'], () => {
        resolve(require('../components/welcome/welcome.vue'))
      })
    }
  }]
}]

export default routers
