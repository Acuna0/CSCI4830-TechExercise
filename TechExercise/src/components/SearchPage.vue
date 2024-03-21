<script setup lang="ts">
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
let sorted = false;
let pokemonData: any =[]
const submitPokemon = (pokemon: any) => {
  let form = new FormData();
  let email: any = sessionStorage.getItem("email");
  let pokemonID = pokemonList.indexOf(pokemon) + 1;
  form.append("pokemonID", pokemonID.toString());
  form.append("email", email.toString());
  axios.post('http://ec2-18-222-28-198.us-east-2.compute.amazonaws.com:8000/collection/', form)
    .then(response => {
      pokemonData = response.data;
      // alert(pokemonData[0])
    });
};

onBeforeUpdate(() => {
  checkList();
});

let imagePath: string = "src/assets/images/"
let imageSourceSuffix: string = ".png"
let altPokemonCardMessage: string = "Pokemon PNG image file of the pokemon "
let idForTypeSearch: string = "TypeCheckbox"
let genCounter: number = 1;
function submit() {
  router.push({path: '/'})
}
function addPokemonMessage(pokemon: any) {
  alert(pokemon[0].toUpperCase()+pokemon.slice(1, ) + " has been added to your collection!")
}
function checkList() {
  pokemonFound = []
  for (let pokemon of pokemonList) {
    if (pokemon.includes(message.value.toLowerCase())) {
      pokemonFound.push(pokemon)
    };
  }
}

let message = ref("");
const router = useRouter();
const pokemonList: Array<string> = [
                                    "bulbasaur", "ivysaur", "venusaur", 
                                    "charmander", "charmeleon", "charizard", 
                                    "squirtle", "wartortle", "blastoise", "caterpie",
                                    "metapod", "butterfree", "weedle", "kakuna",
                                    "beedrill", "pidgey", "pidgeotto", "pidgeot", 
                                    "rattata", "raticate", "spearow", "fearow", "ekans",
                                    "arbok", "pikachu", "raichu", "sandshrew"];

let pokemonFound: Array<string> = [
                                    "bulbasaur", "ivysaur", "venusaur", 
                                    "charmander", "charmeleon", "charizard", 
                                    "squirtle", "wartortle", "blastoise","caterpie",
                                    "metapod", "butterfree", "weedle", "kakuna",
                                    "beedrill", "pidgey", "pidgeotto", "pidgeot",
                                    "rattata", "raticate", "spearow", "fearow", "ekans",
                                    "arbok", "pikachu", "raichu", "sandshrew"];

let pokemonTypeSearchData: Array<string> = ["bug", "dark", "dragon", "electric", "fairy" ,"fighting", 
                                            "fire", "flying", "ghost", "grass", "ground", "ice", "normal", 
                                            "poison", "pyschic", "rock", "steel", "stellar", "water"]

let generationSearchData: Array<string> = ["gen1", "gen2", "gen3", "gen4",
                                           "gen5", "gen6", "gen7", "gen8",
                                           "gen9"]
</script>
<!-- <script lang="js">
import axios from 'axios';

export default {
  data() {
    return {
      pokemonData: []
    }
  },
  mounted() {
    axios.get('http://ec2-18-222-28-198.us-east-2.compute.amazonaws.com:8000/collection')
    .then(response => this.pokemonData = response.data)
  },
  methods: {
    submitPokemon(pokemon: any) {
      let form = new FormData();
      let pokemonID = pokemonList.indexOf(pokemon);
      form.append("pokemonID", pokemonID.toString())
      axios.post('http://ec2-18-222-28-198.us-east-2.compute.amazonaws.com:8000/collection/', form)
      .then(response => this.pokemonData = response.data)
    }
  }
}
</script> -->

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="title-bar">
    <h1>Search for Pokemon</h1>
  </div>
  <div class="b">
    <form @submit.stop.prevent="submit" class="formBox">
      <div class="search-bar">
        <input id="search-bar-input" name="search-bar-input" type="text" placeholder="Type pokemon name here..." v-model="message" @input="checkList" />
      </div>
      <div class="filter-selection-area">
        <!-- <button class="btn btn-secondary dropdown-toggle searchBy" type="button" id="searchByNameDropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
          Name
        </button> -->
        <!-- <ul class="dropdown-menu searchDropdownList" id="radioBoxes" aria-labelledby="searchByNameDropdown">
          <input type="radio" name="searchAlphabetized" value="ascending" id="ascendingRadio"/>
          <label class="searchByLabel" for="ascendingRadio">Ascending</label>
          <input type="radio" name="searchAlphabetized" value="descending" id="descendingRadio"/>
          <label class="searchByLabel" for="descendingRadio">Descending</label>
        </ul> -->

        <!-- <button class="btn btn-secondary dropdown-toggle searchBy" type="button" id="searchByTypeDropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
          Type
        </button>
        <ul class="dropdown-menu searchDropdownList" id="checkBoxes" aria-labelledby="searchByTypeDropdown">
          <input type="checkbox" name="searchType" v-for="pokemonType in pokemonTypeSearchData" :value=pokemonType :id=pokemonType+idForTypeSearch />
          <label class="searchByLabel" name="searchType" v-for="pokemonType in pokemonTypeSearchData" :value=pokemonType :id=pokemonType+idForTypeSearch>{{ pokemonType.toUpperCase() }}</label>
        </ul>

        <button class="btn btn-secondary dropdown-toggle searchBy" type="button" id="searchByGenDropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
          Generation
        </button>
        <ul class="dropdown-menu searchDropdownList" id="checkBoxes" aria-labelledby="searchByGenDropdown">
          <input type="checkbox" name="searchType" v-for="(gen, index) in generationSearchData" :value=index+1 id="gen1" />
          <label class="searchByLabel" v-for="(gen, index) in generationSearchData" :for=gen>GEN {{index+1}}</label> -->
          <!-- <input type="checkbox" name="searchType" value="1" id="gen1" />
            <label class="searchByLabel" for="gen1">Gen 1</label> -->
          <!--<input type="checkbox" name="searchType" value="2" id="gen2" />
            <label class="searchByLabel" for="gen2">Gen 2</label>
          <input type="checkbox" name="searchType" value="3" id="gen3" />
            <label class="searchByLabel" for="gen3">Gen 3</label>
          <input type="checkbox" name="searchType" value="4" id="gen4" />
            <label class="searchByLabel" for="gen4">Gen 4</label>
          <input type="checkbox" name="searchType" value="5" id="gen5" />
            <label class="searchByLabel" for="gen5">Gen 5</label>
          <input type="checkbox" name="searchType" value="6" id="gen6" />
          <label class="searchByLabel" for="gen6">Gen 6</label>
            <input type="checkbox" name="searchType" value="7" id="gen7" />
          <label class="searchByLabel" for="gen7">Gen 7</label>
            <input type="checkbox" name="searchType" value="8" id="gen8" />
          <label class="searchByLabel" for="gen8">Gen 8</label>
            <input type="checkbox" name="searchType" value="9" id="gen9" />
          <label class="searchByLabel" for="gen9">Gen 9</label> -->
        <!-- </ul> -->
      </div>
      <div class="cardContainer">
        <div id="pokemonCard" class="card dataCard" v-for="pokemon in pokemonFound">
          <img :src="imagePath+pokemon+imageSourceSuffix" class="card-img-top" :alt=altPokemonCardMessage+pokemon>
          <div class="card-body">
            <p class="card-text" id="pokemonCardText">{{pokemon[0].toUpperCase()+pokemon.slice(1,)}}
              <button class="fa fa-check" id="pokemonAddButton" :value=pokemon v-on:click="addPokemonMessage(pokemon); submitPokemon(pokemon)">
              </button>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
  <!-- <div>
    <ol>
      <li v-for="pokemon in pokemonFound">{{ pokemon }}</li>
    </ol>
  </div> -->
</template>

<style>
.cardContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content:space-evenly;
}
.cardContainer::after {
  content: "";
  flex: auto;
}
.formBox {
  padding: 0 20px;
}
.dataCard {
  width: 17em;
  margin: 1rem 5px;
  position: relative;
}
h1 {
  color: beige;
}
div {
  color: beige;
}
.filter-selection-area {
  display: flex;
  justify-content:space-evenly;
  margin: auto 25%;
}
.search-by-text {
  padding-top: 5px;
  display: flex;
  font-weight: bold;
}
.dropdown-item:hover {
  background-color: rgb(96, 96, 96) !important;
}
#search-bar-input {
  width: 40%;
  height: 35px;
  font-size: large;
  margin: auto auto 10px auto;
  border-width: 5px;
  border-radius: 15px;
  border-color: wheat;
}
.searchBy {
  width: 21.7%;
  color: beige !important;
  background-color: rgb(40, 40, 40) !important;
  border-color: rgb(40, 40, 40) !important;
}
.searchDropdownList {
  color: beige !important;
  background-color: rgb(40, 40, 40) !important;
  border-color: rgb(40, 40, 40) !important;
}
div.search-bar {
  display: flex;
  justify-content: center;
}
.title-bar {
  display:flex;
  justify-content: center;
}
.searchByLabel{
  background-color: rgb(40, 40, 40);
  display: flex;
  justify-content: center !important;
}
.searchByLabel:hover {
  background-color: rgb(96, 96, 96);
}
#radioBoxes input[type=radio]{
  display: none;
}
#radioBoxes input[type=radio]:checked + .searchByLabel{
  background-color: rgb(96, 96, 96)

}
#checkBoxes input[type=checkbox]{
  display: none;

}
#checkBoxes input[type=checkbox]:checked + .searchByLabel{
  background-color: rgb(96, 96, 96);
}
#pokemonCard {
  background-color: rgb(96, 96, 96);
}

#pokemonCardText {
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
  font-size: larger;
  color:beige
}

#pokemonCard:hover {
  background-color: rgba(96, 96, 96, 0.5);
}

#pokemonAddButton {
  background-color: rgb(96, 96, 96);
}
#pokemonAddButton:hover {
  background-color: rgba(96, 96, 96, 0.2);
}

</style>
