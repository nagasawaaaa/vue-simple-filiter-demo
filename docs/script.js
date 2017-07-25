var vm = new Vue({
  el: '#main',
  data: {
    posts: [
      {
        name: 'title1',
        url : '//www.example.com',
        categories: ['php'],
        display: true
      },
      {
        name: 'title2',
        url : '//www.example.net',
        categories: ['js'],
        display: true
      },
      {
        name: 'title3',
        url : '//www.example.jp',
        categories: ['css'],
        display: true
      },
      {
        name: 'title4',
        url : '//www.example.org',
        categories: ['html','php'],
        display: true
      },
      {
        name: 'title5',
        url : '//www.example.io',
        categories: ['html'],
        display: true
      },
      {
        name: 'title6',
        url : '//www.example.com',
        categories: ['php'],
        display: true
      },
      {
        name: 'title7',
        url : '//www.example.net',
        categories: ['js'],
        display: true
      },
      {
        name: 'title8',
        url : '//www.example.jp',
        categories: ['css'],
        display: true
      },
      {
        name: 'title9',
        url : '//www.example.org',
        categories: ['js','css'],
        display: true
      },
      {
        name: 'title10',
        url : '//www.example.io',
        categories: ['html'],
        display: true
      }
    ],
    category_lists: ['html','js','css','php'],
    preview: []
  },
  methods: {
    select_categories: function(){
      var posts = this.posts;
      var preview = this.preview;

      if(preview.length > 0) {
        for (var i = 0; i < posts.length; i++) {
          var categories = posts[i].categories;
          for (var j = 0; j < preview.length; j++) {
            if(categories.indexOf(preview[j]) >= 0){
              posts[i].display = true;
              break;
            } else {
              posts[i].display = false;
            }
          }
        }
      } else {
        for (var i = 0; i < posts.length; i++) {
          var categories = posts[i].categories;
          posts[i].display = true;
        }
      }
    }
  }
});
