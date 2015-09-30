Template.itemsList.helpers({
  allItems: function () {
    return Items.find({}, {sort: {createdAt: -1}});
  }
});