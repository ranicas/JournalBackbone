Journal.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],
  
  events: {
    "click button.delete-post-button": "deletePost"
  },
  
  initialize: function() {
    this.listenTo(this.collection, "add change:title remove reset", this.render);
  },
  
  render: function() {
    var templateCode = this.template({ posts: this.collection });
    this.$el.html(templateCode);
    return this;
  },
  
  deletePost: function(event) {
    var id = $(event.target).data("post-id");
    
    var post = this.collection.get(id);
    post.destroy();
    
  }
  
});
