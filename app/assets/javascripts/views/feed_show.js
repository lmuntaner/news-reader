NewReader.Views.FeedShow = Backbone.View.extend({
  template: JST['feeds/show'],
  className: 'feed-show',

  initialize: function (attribute) {
    this.listenTo(this.model.get('entries'), 'add', this.render);
  },

  events: {
    'click .refresh-entries': 'refresh'
  },

  render: function () {
    var content = this.template({
      feed: this.model
    });
    this.$el.html(content);
    return this;
  },

  refresh: function () {
    this.model.get('entries').fetch({
      error: function () {
        console.log('Could not refresh view for some reason');
      }
    });
  }
});
