Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/drinks/create', {
  name: 'createDrink',
  controller: 'DrinksController',
  action: 'create',
  where: 'client'
});

Router.route('/drinks', {
  name: 'drinksList',
  controller: 'DrinksController',
  action: 'list',
  where: 'client'
});

Router.route('/drinks/:_id', {
  name: 'editDrink',
  controller: 'DrinksController',
  action: 'edit',
  where: 'client'
});
