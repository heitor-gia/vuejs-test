var Vue = require('vue')
var App = require('./components/app.vue')
var resource = require('vue-resource')
var $ = require('jquery-browserify')(window);

Vue.use(resource)
new Vue({
  el: 'body',
  components: {
    app: App
  }
})

require('../semantic/dist/semantic.js')