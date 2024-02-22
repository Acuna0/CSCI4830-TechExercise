<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <RouterView />
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
</template>

<style scoped>
</style>
