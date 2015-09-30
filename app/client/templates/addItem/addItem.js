Template.addItem.events({

  "submit .add-item-form": function(event, template){
    event.preventDefault();

    var itemTitle = template.find('.add-item-form .item-title').value;

    Items.insert({
      title: itemTitle,
      createdAt: Date()
    });

    $('.add-item-form')[0].reset();

  }

});