/*****************************************************************************/
/* ListDrinks: Event Handlers */
/*****************************************************************************/
Template.ListDrinks.events({
});

/*****************************************************************************/
/* ListDrinks: Helpers */
/*****************************************************************************/
Template.ListDrinks.helpers({
  drinks: function(){
    return Drinks.find();
  }
});

/*****************************************************************************/
/* ListDrinks: Lifecycle Hooks */
/*****************************************************************************/
Template.ListDrinks.onCreated(function () {
});

Template.ListDrinks.onRendered(function () {
});

Template.ListDrinks.onDestroyed(function () {
});
