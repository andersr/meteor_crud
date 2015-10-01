Template.deleteBtn.events({
  'click .delete': function () {

    // var collection = this.collection;
    // var id = this.currentItem._id;

    var collectionAttributes = {
      collection: this.collection,
      id: this.currentItem._id
    }
    
    var confirmDelete = confirm("Really delete this?");

    if (confirmDelete) {
      Meteor.call('removeFromCollection', collectionAttributes, function(error, result){
        if (error){
          console.log(error.reason);
        };
      });
    };
    
  }
});