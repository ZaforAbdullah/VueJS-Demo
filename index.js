var vm = new Vue({
  el: '#app-1',
  data: {
    message: 'Hello Vue!'
  }
})


var vm1 = new Vue({
  el: '#app-2',
  data: {
    message: '<h1>HELLO '+ 
                           '<span style="color:blue;">'+ 
                              'WORLD</span>'+ 
                         '</h1>'
  }
})

var vm2 = new Vue({
  el: '#app-3',
  data: {
    message: 'Hello Vue!'
  }
})

var vm2 = new Vue({
  el: '#app-4',
  data: {
    message: 'Hello Vue!',
	seen: true
  }
})

var vm2 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue!',
	seen: true,
	url: 'https://www.facebook.com/'
  },
    methods: {
    alerttest: function() {
      alert('test')
    }
  }
})
