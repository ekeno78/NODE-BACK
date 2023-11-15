Serveur Backend Pokedex - README

Explication contexte :

Ce code est un serveur backend pour un Pokedex, qui permet de gérer différentes requêtes pour accéder aux données des Pokémon. 

Un pokedex est un répertoire/ un catalogue regroupant des pokemons, de petites créatures fictives détenant chacune un pouvoir unique.

Un serveur back-end permet de gérer les requêtes des utilisateurs.
Il fonctionne en arrière-plan pour fournir les données ou les services demandés.

Nous utilisons le port 5001 avec le serveur express et un fichier JSON pour les données.
Le code est en javascript.

Explication code :

1ère route :

```app.get(
    '/',
    findAllPokemon
)
```
Cette route permet d'afficher la totalité des pokémons, à l'url, il est donc nécessaire de tapper '/' après le nom du serveur afin de faire démarrer la fonction "findAllPokemon" qui lira le JSON, l'analysera et renverra tout le pokedex. Cette fonction renverra donc une requête en GET qui récupérera les données.

2ème route :
```
app.get(
    '/hasard',
    findHasardPokemon
)
```
Cette route permet d'afficher un seul pokemon au hasard parmis tous les pokemons.
Il sera donc nécessaire à l'url de saisir /hasard afin d'afficher la ponne page qui utilise la fonction findHasardPokemon. Cette fonction renverra donc une requête en GET qui récupérera les données. Cette fonction va lire at analyser le JSON  puis en définir les limites afin de pouvoir, à l'aide de la méthode maths.floor(maths.random) va renvoyer un id au hasard du fichier JSON tout en respectant ses limites (min, max).

3ème route :
```
app.get(
    '/pokemon/:id',
    findThisPokemon
)
```
Cette route va permettre d'afficher un pokemon seulement grâce à son Id, il faudra tapper dans l'url /pokemon/:5 par exemple, et le pokemon ayant l'id 5 s'affichera.
Pour que la fonction puisse récupérer l'id saisit dans l'url, il faudra utiliser "request.params.id".
Afin de s'assurer que l'id est utilisabe, trouvable, on fait une condition qui compare l'id du pokemon a la taille du pokedex et a 0.
Cette fonction renverra donc une requête en GET qui récupérera les données.

4ème route :
```
app.get(
    '/pokemon/nom/:name',
    findNamePokemon
)
```
Cette route permet d'afficher un pokemon grâce à son nom. Même pricipe que pour l'id mais dans l'url, on écrit pas id mais name (Pikachu).
Cette fonction renverra donc une requête en GET qui récupérera les données.
