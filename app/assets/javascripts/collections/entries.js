NewReader.Collections.Entries = Backbone.Collection.extend({
  model: NewReader.Models.Entry,
  url: '/entries',

  comparator: function (entry) {
    return entry.get('published_at');
  }
});
