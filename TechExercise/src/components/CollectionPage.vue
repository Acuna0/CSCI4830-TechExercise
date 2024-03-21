<script setup lang="ts">
// assign to an array and create a card for each element in array
import router from '@/router';
import axios from 'axios';
import { onMounted, onRenderTriggered, onUpdated, ref } from 'vue';
const pokemonList: Array<string> = [
                                    "bulbasaur", "ivysaur", "venusaur", 
                                    "charmander", "charmeleon", "charizard", 
                                    "squirtle", "wartortle", "blastoise", "caterpie",
                                    "metapod", "butterfree", "weedle", "kakuna",
                                    "beedrill", "pidgey", "pidgeotto", "pidgeot", 
                                    "rattata", "raticate", "spearow", "fearow", "ekans",
                                    "arbok", "pikachu", "raichu", "sandshrew"];
// let collectionData: any;
// let normalizedCollectionData: any;
// let dataLoaded = false;
let email: any = sessionStorage.getItem("email");
let imagePath: string = "src/assets/images/"
let imageSourceSuffix: string = ".png"
let altPokemonCardMessage: string = "Pokemon PNG image file of the pokemon "

// if (document.hasFocus()) {
//   email = sessionStorage.getItem("email");
//   normalizedCollectionData = [];
//   getCollection(email);
// }

const collectionData = ref([]);
const normalizedCollectionData = ref<string[]>([]);
const dataLoaded = ref(false);

onMounted(() => {
  email = sessionStorage.getItem("email");
  getCollection(email);
});

function getCollection(email: any) {
  axios.get('http://ec2-18-222-28-198.us-east-2.compute.amazonaws.com:8000/collection/', {params: { email: email}})
    .then(response => {
      collectionData.value = response.data.pokemonNames;
      normalizedCollectionData.value = collectionData.value.map(pokemonName => pokemonName);
      dataLoaded.value = true;
      // collectionData = response.data.pokemonNames;
      // for(let i = 0; i < collectionData.length; i++) {
      //   let pokemonName = collectionData[i];
      //   normalizedCollectionData.push(pokemonName[0].toLowerCase()+pokemonName.slice(1, ))
      // }
      // dataLoaded = true;
    })
  return true
};

function removePokemon(pokemon: any) {
  const removeCall = () => {
        let form = new FormData();
        let pokemonName = pokemon;
        // let email = sessionStorage.getItem("email");
        form.append("email", email ? email : "");
        form.append("pokemonName", pokemonName);
        axios.post('http://ec2-18-222-28-198.us-east-2.compute.amazonaws.com:8000/delete/', form)
            .then(response => 
            {
              alert("Successful");
              router.push("/");
            }, 
            (error) =>
            {
                alert(error.message + "\n Pokemon was not removed :( )");
            });
    };
  removeCall();
}

function removePokemonMessage(pokemon: any) {
  alert(pokemon[0].toUpperCase()+pokemon.slice(1, ) + " has been removed from your collection!")
}

// const checkSession = setInterval(function() {
//     if(dataLoaded) {
//         console.log("data loaded");
//     } else {
//       console.log("not loaded")
//     }
// }, 500);

</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="collectionBanner">
    <h1>
      MY COLLECTION
    </h1>
  </div>
  <div class="cardContainer" v-if="dataLoaded && normalizedCollectionData">
    <div id="pokemonCard" class="card dataCard" v-for="pokemon in normalizedCollectionData">
      <img :src="imagePath+pokemon.toLowerCase()+imageSourceSuffix" class="card-img-top" :alt=altPokemonCardMessage+pokemon>
      <div class="card-body">
        <p class="card-text" id="pokemonCardText">{{pokemon[0].toUpperCase()+pokemon.slice(1,)}}
          <button class="fa fa-ban" id="pokemonAddButton" :value=pokemon v-on:click="removePokemonMessage(pokemon); removePokemon(pokemon)">
          </button>
        </p>
      </div>
    </div>
  </div>
  <div v-else class="elseDiv"> Currently Loading... </div>
</template>

<style>
.collectionBanner {
  display: flex;
  justify-content: center;
}
.elseDiv {
  display: flex;
  margin-top: 10rem;
  justify-content: center;
  align-items: center;
}
</style>
