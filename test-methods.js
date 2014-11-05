var Collections = new Meteor.Collection('Collections');

Meteor.methods({
  testMethod: function (id) {
    Collections.insert({collection: id});
  }
});

if (Meteor.isClient) {
  Template.hello.events({
    'click button': function () {
      Meteor.call('testMethod', Random.id(), function (error) {
        if (error) console.error(error);
      });
    }
  });

  Collections.find().observe({
    added: function (document) {
      new Meteor.Collection('collections.' + document.collection);
    }
  });
}
