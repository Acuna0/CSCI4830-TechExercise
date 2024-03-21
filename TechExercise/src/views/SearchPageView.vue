<script setup lang="ts">
import SearchPage from '@/components/SearchPage.vue';
import LoginPage from '@/components/LoginPage.vue';
import { onMounted } from 'vue';
import router from '@/router';

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
    <div class="nav-bar">
    <div class="test">
      <RouterLink to="/" class="nav-buttons" id="nav-button">
        <label class="nav-bar-labels">Home</label
      ></RouterLink>
    </div>
    <div class="test">
      <RouterLink to="/collection" class="nav-buttons" id="nav-button">
        <label class="nav-bar-labels">Library</label>
      </RouterLink>
    </div>
  </div>
  <SearchPage v-if="isAuthenticated"/>
  <!-- <LoginPage v-if="!isAuthenticated"/> -->
</template>

<style>
</style>

