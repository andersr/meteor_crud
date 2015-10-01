Items = new Mongo.Collection('items');

Meteor.methods({

  addItem:function(itemTitle){

    check(itemTitle, String);
    Items.insert({title: itemTitle});
  }

});
