/*****************************************************************************/
/* EditDrink: Event Handlers */
/*****************************************************************************/
Template.EditDrink.events({
});

/*****************************************************************************/
/* EditDrink: Helpers */
/*****************************************************************************/
Template.EditDrink.helpers({
  beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete drink: "' + doc.name + " " + '"?')) {
      this.remove();
      Router.go('drinksList');
    }
  };
 }
});

/*****************************************************************************/
/* EditDrink: Lifecycle Hooks */
/*****************************************************************************/
Template.EditDrink.onCreated(function () {
});

Template.EditDrink.onRendered(function () {
});

Template.EditDrink.onDestroyed(function () {
});
