Journal.Views.PostsForm = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },
  
  template: JST['posts/form'],
  
  events: {
    "submit form":"savePost"
  },
  
  render: function() {
    var templateCode = this.template({ post: this.model });
    this.$el.html(templateCode);
    return this;
  },
  
  savePost: function(event) {
    event.preventDefault();
    var postAttrs = $(event.target).serializeJSON()['post'];
    var isNew = this.model.isNew();
    this.model.save(postAttrs, {
      success: (function() {
        if(isNew) {
          this.collection.add(this.model);
        }
        Backbone.history.navigate('#posts/' + this.model.get('id'), { trigger: true });
      }).bind(this),
      error: function(model, resp) {
        $('.errors').html(resp.responseText);
      }
    });
  }

    // var post = new Journal.Models.Post($(event.target).serializeJSON()['post']);
 //    if(post['id'] != "") {
 //      post.update({}, {
 //        success: function () {
 //           Backbone.history.navigate('#', { trigger: true })
 //        },
 //        error: function(model, resp) {
 //          $('.errors').html(resp.responseText);
 //        }
 //      });
 //    } else {
 //      post.save({}, {
 //        success: function () {
 //           Backbone.history.navigate('#', { trigger: true })
 //        },
 //        error: function(model, resp) {
 //          $('.errors').html(resp.responseText);
 //        }
 //      });
 //    }
 //  }
  
});
  