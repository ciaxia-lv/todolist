// 引入vue
import Vue from 'vue'
// 引入APP组件，它是所有组件的父组件
import App from './App.vue'
//引入vuex
import vuex from 'vuex'

// 关闭vue的生产提示
Vue.config.productionTip = false

//使用插件
Vue.use(vuex)

// 创建vue实例对象--vm
new Vue({
  el:'#app',
  store:{

  },
  // 将APP组件放入容器中
  render: h => h(App),
})
