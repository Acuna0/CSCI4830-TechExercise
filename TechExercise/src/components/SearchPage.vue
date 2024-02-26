<script setup lang="ts">
import { onBeforeUpdate, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

onBeforeUpdate(() => {
  checkList();
  console.log("dawd")
})

const router = useRouter();
let message = ref("");
const pokemonList: Array<String> = [
                                    "bulbasaur", "ivysaur", "venusaur", 
                                    "charmander", "charmeleon", "charizard", 
                                    "squirtle", "wartortle", "blastoise"
                                   ];

let pokemonFound: Array<String> = [
                                    "bulbasaur", "ivysaur", "venusaur", 
                                    "charmander", "charmeleon", "charizard", 
                                    "squirtle", "wartortle", "blastoise"
                                   ];;
function submit() {
  router.push({path: '/'})
}

function checkList() {
  pokemonFound = []
  for (let pokemon of pokemonList) {
    if (pokemon.includes(message.value)) {
      pokemonFound.push(pokemon)
    };
  }
}
</script>

<template>
  <div class="title-bar">
    <h1>title bar</h1>
  </div>
  <div class="b">
    <form @submit.stop.prevent="submit">
      <div class="search-bar">
        <input id="search-bar-input" name="search-bar-input" type="text" placeholder="Type pokemon name here..." v-model="message" @input="checkList" />
      </div>
      <div class="c">
        <div class="d">search by name (asc or desc)</div>
        <div class="d">search by type</div>
        <div class="d">search by generation?</div>
      </div>
    </form>
  </div>
  <div>
    <ol>
      <li v-for="pokemon in pokemonFound">{{ pokemon }}</li>
    </ol>
  </div>
  <!-- <CollectionPage v-if="resultsFound"/> -->
</template>

<style>
h1 {
  color: beige;
}
div {
  color: beige;
}
.c {
  display: flex;
  justify-content:space-evenly;
  margin: auto 25%;
}
#search-bar-input {
  width: 40%;
  height: 25px;
  font-size: large;
  margin: auto auto 10px auto;
  border-width: 5px;
  border-radius: 15px;
  border-color: wheat;
}
div.search-bar {
  display: flex;
  justify-content: center;
}
</style>
