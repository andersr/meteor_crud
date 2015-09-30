Template.deleteBtn.events({
  'click .delete': function () {

    var collection = this.collection;
    var id = this.currentItem._id;
    
    var confirmDelete = confirm("Really delete this?");

    if (confirmDelete) {
      Mongo.Collection.get(collection).remove({ _id: id });
    };
    
  }
});