Journal.Views.PostsShow = Backbone.View.extend({
  template: JST['posts/show'],
  
  events: {
    "click button.delete-post-button": "deletePost",
    "click button.edit-post-button": "editPost"
  },
  
  initialize: function() {
    this.listenTo(this.model, "add change:title reset sync", this.render);
  },
  
  render: function() {
    var templateCode = this.template({ post: this.model });
    this.$el.html(templateCode);
    return this;
  },
  
  deletePost: function(event) {
    this.model.destroy({
      success: function(){
        Backbone.history.navigate('#', { trigger: true })
      }});
  },
  
  editPost: function(event) {
    Backbone.history.navigate('posts/' + this.model.get('id') + "/edit", { trigger: true });
  }
  
});
