Template.singleItem.onCreated(function(){

  var
  templateInstance               = this;

  templateInstance.currentItem   = new ReactiveVar(templateInstance.data._id),
  templateInstance.editableItem  = new ReactiveVar(),
  templateInstance.editing       = new ReactiveVar(false)
  ;

  templateInstance.autorun(function(){
    if (templateInstance) {
      templateInstance.editing.set(
        templateInstance.currentItem.get() ===
        templateInstance.editableItem.get()
      );
    };
  
  });

});

Template.singleItem.helpers({
  editing: function () {
    return Template.instance().editing.get();
  }
});

Template.singleItem.events({

  'click .edit-item': function () {
    Template.instance().editableItem.set(this._id);
  },

  'click .cancel-edit': function () {
    Template.instance().editableItem.set("");
  },

  "submit .update-item": function(event, template){
    event.preventDefault();

    var itemAttributes = {
      id:    this._id,
      title: template.find('.update-item .item-title').value
    };

    Meteor.call('updateItem', itemAttributes, function(error, result){
      if (error){
        console.log(error.reason);
      } ;
    });

    Template.instance().editableItem.set("");

  }

});