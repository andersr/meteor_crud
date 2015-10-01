Items = new Mongo.Collection('items');

Meteor.methods({

  addItem:function(itemTitle){

    check(itemTitle, String);
    Items.insert({
      title: itemTitle,
      createdAt: Date()
    });
  },

  removeFromCollection: function(collectionAttributes){

    check(collectionAttributes, {
      collection: String,
      id:         String
    });

    Mongo.Collection.get(collectionAttributes.collection).remove({ _id: collectionAttributes.id });

  }


});

  