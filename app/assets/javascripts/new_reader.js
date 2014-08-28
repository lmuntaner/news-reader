window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    var $rootEl = $('#content');
    var $sidebar = $('#sidebar');
    var feeds = new NewReader.Collections.Feeds();

    // install the sidebar external to the router as it is
    // independent of any routing
    var feedsIndexView = new NewReader.Views.FeedsIndex({
      collection: feeds
    });
    $sidebar.html(feedsIndexView.render().$el);

    feeds.fetch({
      success: function () {
        new NewReader.Routers.FeedRouter(feeds, $rootEl);
        Backbone.history.start();
      },
      error: function () {
        console.log('Failed to fetch.');
      }
    });
  }
};
// boot the app when the document is ready
$(NewReader.initialize);
