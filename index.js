// Define a new component called button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

var example1 = new Vue({
  el: '#components-demo',
  data: {
    message: 'message'
  }
})

var example1 = new Vue({
  el: '#components-demo-1',
  data: {
    message: 'message'
  }
})
