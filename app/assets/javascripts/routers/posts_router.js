Journal.Routers.Posts = Backbone.Router.extend({
  routes: {
    "": "index",
    "posts/new": "renderForm",
    "posts/:id": "show"
  },
  
  index: function() {
    var posts = new Journal.Collections.Posts();
    posts.fetch()
    var indexView = new Journal.Views.PostsIndex({collection: posts});

    $("body").html(indexView.render().$el)
  },
  
  show: function(id) {
    var post = new Journal.Models.Post({id: id});
    post.fetch();
    var postView = new Journal.Views.PostsShow({ model: post });
    $('body').html(postView.render().$el);
  },
  
  renderForm: function(postData){
    var post = postData || new Journal.Models.Post({title: "", body: ""});
    var formView = new Journal.Views.PostsForm({ model: post });
    $('body').html(formView.render().$el);
  }
  
  // getOrFetch: function(id) {
  //   var posts = this.collection;
  //   var post;
  //   if(!(post = this.get(id))) {
  //     post = new Journal.Models.Post({ id: id });
  //     post.fetch({
  //       success: function() { posts.add(post) }
  //     });
  //   }
  //   return post;
  // }
});
