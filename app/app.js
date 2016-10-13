(function(){

  angular.module("callAsap", ["ui.router"]);

  angular.module("callAsap")
    .config(function($stateProvider, $urlRouterProvider){

      $stateProvider

        .state("home", {
          url: "/",
          views: {
            "": {templateUrl: "view/home.php",
                controller: "HomeController"
            },
            "navbar@home": {templateUrl: "view/navbar.html"},
            "country@home": {templateUrl: "view/country.html"}
          }

        })

        .state("search", {
          url: "/search",
          views: {
            "": {templateUrl: "view/search.html",
                controller: "SearchController"
            },
            "navbar@search": {templateUrl: "view/navbar.html"},
            "country@search": {templateUrl: "view/country.html"}
          }
        })

        .state("aboutUs", {
          url: "/aboutUs",
          views: {
            "": {templateUrl: "view/aboutUs.html",
                controller: "AboutUsController"
            },
            "navbar@aboutUs": {templateUrl: "view/navbar.html"}
          }
        });

        $urlRouterProvider.otherwise("/");

    });

})();
