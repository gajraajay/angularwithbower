app.run(['$rootScope', '$state', function($rootScope, $state) {

  console.log($state);

}]).config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {

  $urlRouterProvider.otherwise('/app');

  $stateProvider.state('app', {
    url: '/app',
    template: 'app.html',
    resolve: load("/sparlcjaty.js")
  });


  function load(res, callBack) {
    return {
      deps:['$ocLazyLoad', '$q',function($ocLazyLoad ,$q){
          console.log("sandeep singh");

      } ]
    }

  }


}]);
