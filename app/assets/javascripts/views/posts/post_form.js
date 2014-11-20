Journal.Views.PostsForm = Backbone.View.extend({
  template: JST['posts/form'],
  
  events: {
    "submit form":"createPost"
    // "click button.submit": "createPost"
  },
  
  render: function() {
    var templateCode = this.template({ post: this.model });
    this.$el.html(templateCode);
    return this;
  },
  
  createPost: function(event) {
    event.preventDefault();
    var post = new Journal.Models.Post($(event.target).serializeJSON()['post']);
    debugger
  }
  
});
  