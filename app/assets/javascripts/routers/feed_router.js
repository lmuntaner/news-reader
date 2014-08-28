NewReader.Routers.FeedRouter = Backbone.Router.extend({
  initialize: function (feeds, $rootEl, $sidebar) {
    this.feeds = feeds;
    this.$rootEl = $rootEl;
  },

  routes: {
    '': 'index',
    'feeds/:id': 'show',
    'feeds/:feed_id/entries/:id': 'entry'
  },

  index: function () {
    this.$rootEl.html('');
  },

  show: function (id) {
    var feedShowView = new NewReader.Views.FeedShow({
      model: this.feeds.get(id)
    });

    this._swapView(feedShowView);
  },

  entry: function (feed_id, id) {
    var entry = this.feeds.get(feed_id).get('entries').get(id);
    var entryShowView = new NewReader.Views.EntryShow({
      model: entry
    });

    this._swapView(entryShowView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
