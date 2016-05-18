
function MainConfig($stateProvider, $urlRouterProvider, $locationProvider){
  
  $stateProvider
    .state('main', {
      url: '/',
      template: '@@import _main.html',
      controllerAs: '$ctrl',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
}

export default [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  MainConfig
]