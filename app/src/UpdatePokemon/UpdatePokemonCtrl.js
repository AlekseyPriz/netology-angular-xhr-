'use strict';

pokemonApp.controller('UpdatePokemonCtrl', function($scope, $routeParams, PokemonsService) {

  PokemonsService.getPokemon($routeParams['pokemonId']).then(function(pokemonData) {
    $scope.pokemon = pokemonData.data;
  });

  $scope.updatePokemon = function(newPokemon) {
    PokemonsService.updatePokemon($scope.pokemon.id, newPokemon);
  };

});
