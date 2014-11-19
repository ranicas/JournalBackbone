Journal.Views.PostsShow = Backbone.View.extend({
  template: JST['posts/show'],
  
  events: {
    "click button.delete-post-button": "deletePost"
  },
  
  initialize: function() {
    this.listenTo(this.model, "add change:title remove reset sync", this.render);
  },
  
  render: function() {
    var templateCode = this.template({ post: this.model });
    this.$el.html(templateCode);
    return this;
  },
  
  deletePost: function(event) {
    this.model.destroy();   
  }
  
});
