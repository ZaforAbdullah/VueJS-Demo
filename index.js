// Define a new component called button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
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

var example2 = new Vue({
  el: '#components-demo-2',
  data: {
    message: 'message'
  }
})

var example3 = new Vue({
  el: '#components-demo-3',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
  }
})

Vue.component('blog-posts', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  `
})

var example4 = new Vue({
  el: '#components-demo-4',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue', content: '<b> First Content </br>', publishedAt: 'Today', comments: 'good'},
      { id: 2, title: 'Blogging with Vue', content: '<b> Second Content </br>', publishedAt: 'Today', comments: 'good'},
      { id: 3, title: 'Why Vue is so fun', content: '<b> Third Content </br>', publishedAt: 'Today', comments: 'good'}
    ]
  }
})

Vue.component('blog-postss', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')">
		Enlarge text
	  </button>
      <div v-html="post.content"></div>
    </div>
  `
})

var example5 = new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue', content: '<b> First Content </br>', publishedAt: 'Today', comments: 'good'},
      { id: 2, title: 'Blogging with Vue', content: '<b> Second Content </br>', publishedAt: 'Today', comments: 'good'},
      { id: 3, title: 'Why Vue is so fun', content: '<b> Third Content </br>', publishedAt: 'Today', comments: 'good'}
    ],
	postFontSize: 1
  }
})
