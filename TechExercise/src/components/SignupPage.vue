<script setup lang="ts">
import axios from 'axios';
function signUpNew() {
    let signupData: any =[]
    const submitSignUp = () => {
    let form = new FormData();
    let firstName = (<HTMLInputElement>document.getElementById("firstName")).value;
    let lastName = (<HTMLInputElement>document.getElementById("lastName")).value;
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;
    form.append("first_Name", firstName);
    form.append("last_Name", lastName);
    form.append("email", email);
    form.append("password", password);
    axios.post('http://127.0.0.1:8000/signup/', form)
        .then(response => {
        signupData = response.data;
        });
    };
    submitSignUp();
}
</script>
<template>
<form @submit.prevent="signUpNew()">
    <div class="EmailBox">
        <label for="email" class="inputLabel">Enter First Name</label>
        <input type="text" name="email" id="firstName" class="inputFields">
    </div>
    <div class="EmailBox">
        <label for="email" class="inputLabel">Enter Last Name</label>
        <input type="text" name="email" id="lastName" class="inputFields">
    </div>
    <div class="EmailBox">
        <label for="email" class="inputLabel">Enter Email</label>
        <input type="text" name="email" id="email" class="inputFields">
    </div>
    <div class="PasswordBox">
        <label for="password" class="inputLabel">Enter Password</label>
        <input type="text" name="password" id="password" class="inputFields"/>
    </div>
    <div class="LoginBox">
        <input type="button" class="loginButtons" v-on:click="signUpNew()" value="Sign up">
    </div>
</form>
</template>