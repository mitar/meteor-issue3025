Meteor.methods({
  testMethod: function () {
    if (Meteor.isClient) {
      new Meteor.Collection('xxx');
    }
  }
});

if (Meteor.isClient) {
  Template.hello.events({
    'click button': function () {
      Meteor.call('testMethod',  function (error) {
        if (error) console.error(error);
      });
    }
  });
}
