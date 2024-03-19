<script setup lang="ts">
import LoginPage from '@/components/LoginPage.vue';
import router from '@/router';

function checkLogin() {
  if (sessionStorage.getItem("isAuthenticated") == "true") {
    router.push({ path: '/' })
  }
}
</script>

<template>
  <LoginPage />
</template>

<style>
</style>