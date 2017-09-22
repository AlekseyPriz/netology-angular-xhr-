'use strict';

pokemonApp.controller('PokemonListCtrl', function($scope, PokemonsService) {

    $scope.loader = 'Данные загружаются';

    PokemonsService.getPokemons().then(function(pokemonsData) {
        $scope.pokemons = pokemonsData.data;
        $scope.loader = ''
    });

    $scope.myOrderProperty = 'id';


});
