Journal.Routers.Posts = Backbone.Router.extend({
  routes: {
    "": "index",
    "posts/new": "renderForm",
    "posts/:id": "show",
    "posts/:id/edit": "renderForm"
  },
  
  initialize: function() {
    this.collection = new Journal.Collections.Posts();
    this.collection.fetch();
  },
  
  index: function() {
    var indexView = new Journal.Views.PostsIndex({collection: this.collection});
    $("body").html(indexView.render().$el)
  },
  
  show: function(id) {
    this.model = this.getOrFetch(id);
    var postView = new Journal.Views.PostsShow({ model: this.model });
    $('body').html(postView.render().$el);
  },
  
  renderForm: function(id){
    this.model = this.getOrFetch(id);
    var formView = new Journal.Views.PostsForm({ model: this.model, collection: this.collection });
    $('body').html(formView.render().$el);
  },
  
  getOrFetch: function(id) {
    var post = this.collection.get(id);
    if (!post) {
      post = new Journal.Models.Post({ id: id });
      post.fetch();
    }
    return post;
  }
});
