var vm = new Vue({
  el: '#app-1',
  data: {
    message: 'Hello Vue!'
  }
})

var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app-2',
  data: obj
})