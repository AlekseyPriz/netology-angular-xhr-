var pokemonApp = angular.module('PokemonApp', ['ngRoute']);

angular.
module('PokemonApp').
config(['$routeProvider',
    function config($routeProvider) {

        $routeProvider.
        when('/pokemons', {
            templateUrl: 'src/PokemonList/PokemonList.html',
            controller: 'PokemonListCtrl'
        }).
        when('/pokemons/:pokemonId', {
            templateUrl: 'src/PokemonDetail/PokemonDetail.html',
            controller: 'PokemonDetailCtrl'
        }).
        when('/create', {
            templateUrl: 'src/CreatePokemon/CreatePokemon.html',
            controller: 'CreatePokemonCtrl'
        }).
        when('/update/:pokemonId', {
          templateUrl: 'src/UpdatePokemon/UpdatePokemon.html',
          controller: 'UpdatePokemonCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]).
config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.headers.common['Application-id'] = 'application-id-token';
    $httpProvider.defaults.headers.common['Secret-key'] = 'secret-key-token';
}]);
