angular
    .module('PokemonApp')
    .factory('PokemonsService', function($http) {

            return {

                getPokemons: function() {
                    return $http.get('data/pokemons.json');
                },

                getPokemon: function(pokemonId) {
                    return $http.get('data/pokemon.' + pokemonId + '.json');
                },

                //Метод Put без привязки к бэкэнду.
                updatePokemon: function(pokemonId, data) {
                  return $http.put('beckendServer/pokemon/' + pokemonId, data);
                }

            }

        }

    );
