<script setup lang="ts">

import pokemonFound from './SearchPage.vue';

</script>

<template>
  <div>
    <h1>Found</h1>
  </div>
  <div>
    <ol>
      <li v-for="pokemon in pokemonFound">{{ pokemon }}</li>
    </ol>
  </div>
</template>

<style>
</style>
