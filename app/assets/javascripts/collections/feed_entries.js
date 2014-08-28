NewReader.Collections.FeedEntries = Backbone.Collection.extend({
  model: NewReader.Models.Entry,

  initialize: function (models, options) {
    this.feed = options.feed;
  },

  url: function () {
    return '/feeds/' + this.feed.id + '/entries';
  }
});
