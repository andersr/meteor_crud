Template.addItem.events({

  "submit .add-item-form": function(event, template){
    event.preventDefault();

    var itemTitle = template.find('.add-item-form .item-title').value;

    Meteor.call('addItem', itemTitle, function(error, result){
      if (error){
        console.log(error.reason);
      } else {
       $('.add-item-form')[0].reset();
      }
    });

    // Items.insert({
    //   title: itemTitle,
    //   createdAt: Date()
    // });

  }

});