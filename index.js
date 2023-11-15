// serveur backend Pokedex

console.log("Salut");

const fs = require('fs')

// définir l'emplacement des fichiers de bdd
const POKEDEX_SRC = "./DATA/pokedex.json";

// définir emplacement des images
const image_src = "./FILES/images";

// définir un port
const port = 5001;

// lancer un serveur express sur un port défini
const express = require('express');
const app = express();
app.use(express.static('FILES'));

// Pour éviter d'avoir des erreurs CORS
const cors= require('cors');
app.use(cors());

// lancement du serveur et attendre
app.listen(port,
    '127.0.0.1',
    () => {
        console.log('Le serveur pokedex est en écoute sur le port :' + port);
    }
)


// Crée la route qui renvoie tout
app.get(
    '/',
    findAllPokemon
)

//fonction

function findAllPokemon(request, response) {
    // lecture
    let data = fs.readFileSync(POKEDEX_SRC);

    // analyse du JSON
    let pokedex = JSON.parse(data);

    // renvoie tout le Json 
    response.send(pokedex);
}

app.get(
    '/hasard',
    findHasardPokemon
)

function findHasardPokemon(request, response) {

    // lecture
    let data = fs.readFileSync(POKEDEX_SRC);

    // analyse du JSON
    let pokedex = JSON.parse(data);

    // définition des limites
    let idMin = 1;

    let idMax = pokedex.length;

    // récupération de la taille du Pokédex
    //let pokedexTaille = pokedex.length;

    // def de l'id qui sera un random int
    let hasardId = Math.floor(Math.random() * (idMax - idMin)) + idMin;

    // recherche du pokemon qui correspond à l'id définit juste au dessus
    let randomPokemon = pokedex.find(pokemon => pokemon.id === hasardId);

    // renvoie le pokemon aléatoire
    response.send(randomPokemon);

}

app.get(
    '/pokemon/:id',
    findThisPokemon

)

function findThisPokemon(request, response) {
    console.log("par id")
    console.log(request.params.id)
    // lecture
    let data = fs.readFileSync(POKEDEX_SRC);

    // analyse du JSON
    let pokedex = JSON.parse(data);

    // récupère l'id écrit dans la route 
    let thisPokemon = request.params.id - 1;

    let pokedexTaille = pokedex.length;

    if (thisPokemon > pokedexTaille - 1) {
        response.send('ID trop grand, désolé')

    } else if (thisPokemon < 0) {
        response.send('ID trop petit, désolé')

    } else {
        // renvoie le pokemon  dont l'ID est saisit
        response.send(pokedex[thisPokemon]);
    }

}

app.get(
    '/pokemon/nom/:name',
    findNamePokemon

)

function findNamePokemon(request, response) {
    console.log("par nom")
    console.log(request.params.name)
    // lecture
    let data = fs.readFileSync(POKEDEX_SRC);

    // analyse du JSON
    let pokedex = JSON.parse(data);

    // récupère le name écrit dans la route 
    let namePokemon = request.params.name ;

    // Constante du pokemon écrit dans la route qui filtre, et filtre pour capter le fr
    const lePokemon= pokedex.filter((pokemon) => pokemon.name.french === namePokemon);

   
        // renvoie le pokemon  dont le nom est saisit
        response.send(lePokemon);
    
}



















