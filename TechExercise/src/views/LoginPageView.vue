<script setup lang="ts">
import LoginPage from '@/components/LoginPage.vue';
import router from '@/router';
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';

let isAuthenticated: any = false;

const afterLoad = () => {
  if (sessionStorage.getItem("isAuthenticated") == "true") {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
    router.push("/login")
  }
}
afterLoad();

</script>

<template>
  <LoginPage v-if="!isAuthenticated"/>
  <RouterView v-else></RouterView>
</template>

<style>
</style>