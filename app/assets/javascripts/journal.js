window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Journal.Routers.Posts();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Journal.initialize();
});
