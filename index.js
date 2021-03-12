var vm1 = new Vue({
  el: '#example-1',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})

var vm2= new Vue({
  el: '#example-2',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})

var vm3 = new Vue({
  el: '#example-3',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})

var vm4 = new Vue({
  el: '#example-4',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})

var vm5 = new Vue({
  el: '#example-5',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
	computed: {
	  fullName: {
		// getter
		get: function () {
		  return this.firstName + ' ' + this.lastName
		},
		// setter
		set: function (newValue) {
		  var names = newValue.split(' ')
		  this.firstName = names[0]
		  this.lastName = names[names.length - 1]
		}
	  }
	}
})








