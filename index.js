var vm1 = new Vue({
  el: '#example-1',
  data: {
	isActive: true,
	hasError: false
  }
})

var vm1 = new Vue({
  el: '#example-2',
  data: {
	isActive: true,
	error: null
  },
  computed: {
	classObject: function () {
	  return {
		active: this.isActive && !this.error,
		'text-danger': this.error && this.error.type === 'fatal'
	  }
	}
  }
})

Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})

var vm1 = new Vue({
  el: '#example-3',
  data: {
	activeClass: 'active',
	errorClass: 'text-danger'
  }
})






