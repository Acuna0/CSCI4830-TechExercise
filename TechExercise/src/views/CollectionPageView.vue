<script setup lang="ts">
import CollectionPage from '@/components/CollectionPage.vue';
import SearchPage from '@/components/SearchPage.vue';
import router from '@/router';
import { onMounted } from 'vue';

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
  <CollectionPage v-if="isAuthenticated"/>
</template>

<style>
.column-one {
  margin: 10px;
}
.column-two {
  margin: 10px;
}
.column-three {
  margin: 10px;
}
h1 {
  color: beige;
}
</style>
