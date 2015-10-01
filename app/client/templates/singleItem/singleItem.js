Template.singleItem.onCreated(function(){

  var
  templateInstance               = this;

  templateInstance.currentItem   = new ReactiveVar(templateInstance.data._id),
  templateInstance.editableItem  = new ReactiveVar(""),
  templateInstance.editing       = new ReactiveVar(false)
  ;

  templateInstance.autorun(function(){
    templateInstance.editing.set(
      templateInstance.currentItem.get() ===
      templateInstance.editableItem.get()
    );
  });

});

Template.singleItem.onDestroyed(function(){
  templateInstance.editing.set(false);
  templateInstance.editableItem.set("");
});


Template.singleItem.helpers({
  editing: function () {
    return Template.instance().editing.get();
  }
});

Template.singleItem.events({

  'click .edit-item': function () {
    console.log(Template.instance().currentItem.get());
    Template.instance().editableItem.set(this._id);
  },

  'click .cancel-edit': function () {
    Template.instance().editableItem.set("");
  },

  "submit .update-item": function(event, template){
    event.preventDefault();

    Items.update({ _id:this._id }, {
      $set : {
        title: template.find('.update-item .item-title').value
      }
    });
    $('.update-item')[0].reset();
    Template.instance().editableItem.set("");
  }

});