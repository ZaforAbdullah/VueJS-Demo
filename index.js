Vue.component('blog-posts', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
		Enlarge text
	  </button>
      <div v-html="post.content"></div>
    </div>
  `
})

Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})

var example1 = new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue', content: '<b> First Content </br>', publishedAt: 'Today', comments: 'good'},
      { id: 2, title: 'Blogging with Vue', content: '<b> Second Content </br>', publishedAt: 'Today', comments: 'good'},
      { id: 3, title: 'Why Vue is so fun', content: '<b> Third Content </br>', publishedAt: 'Today', comments: 'good'}
    ],
	postFontSize: 1
  },
  methods: {
  onEnlargeText: function (enlargeAmount) {
    this.postFontSize += enlargeAmount
    }
  }
})


