<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter()
let isAuthenticated:any = false;
function goToCollection() { 
  router.push({ path: '/collection' })
}

onMounted(() => {
  if (sessionStorage.getItem("isAuthenticated") == "true") {
    isAuthenticated = false;
  } else {
    isAuthenticated = false;
  }
  
});

// const checkSession = setInterval(function() {
//     if(sessionStorage.getItem("isAuthenticated") != null) {
//         isAuthenticated = sessionStorage.getItem("isAuthenticated")
//     }
//     if (isAuthenticated == "true")
//     {
//         router.push({ path: '/' });
//     }
// }, 100);

</script>

<template>
  <div class="body">
    <RouterView></RouterView>
  </div>
  <!-- <div class="body">
    <RouterView></RouterView>
  </div> -->
</template>

<style>

#nav-button {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.nav-bar {
  display: flex;
  margin: 0 0 10px 0;
  background-color:rgb(40, 40, 40);
  height: 50px;
  width:100%;
}
.nav-buttons {
  font-family: sans-serif;
  font-size: large;
  text-decoration: none;
  color: beige;
}
.nav-bar-labels:hover {
  border-radius: 20px;
  text-shadow: 1px 1px 25px white;
}
.test {
  display: flex;
  flex-grow: 1;
}
.test:hover {
  /* text-shadow: 0 5px 10px rgba(61, 87, 91, 0.7); ; */
  background-color: rgb(96, 96, 96);
  border-radius: 10px;
}
</style>
