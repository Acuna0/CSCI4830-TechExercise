<script setup lang="ts">
import router from '@/router';
import axios from 'axios';
import { onMounted } from 'vue';
let isAuthenticated: any;
let validationEmailPassed = false;
let validationPasswordPassed = false;

onMounted(() => {
    (<HTMLFormElement>document.getElementById('signupForm')).reset();
})
function goToLogin() {
    router.push({ path: '/login' });
}
function signUpLogic() {
    let checkEmailField = (<HTMLInputElement>document.getElementById("email")).value
    let checkPasswordField = (<HTMLInputElement>document.getElementById("password")).value

    if (checkEmailField.length < 5 ||
        !checkEmailField.includes("@") ||
        !checkEmailField.includes(".com")) 
        {
            alert("Email must be a minimum of 5 characters and include an @ and .com")
        } else {
            validationEmailPassed = true;
        }
    if (checkPasswordField.length < 8 || 
        checkPasswordField == checkEmailField.toLocaleLowerCase() ||
        checkPasswordField == checkEmailField.toUpperCase() ||
        !checkPasswordField.match("[@!#$%^&*]+"))
        {
            alert("Password must be a minium of 8 characters, cannot be all lowercase or uppercase, and must contain at least 1 special character")
        } else {
            validationPasswordPassed = true;
        }
}
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
    axios.post('http://ec2-18-222-28-198.us-east-2.compute.amazonaws.com:8000/signup/', form)
        .then(response => {
        signupData = response.data;
        (<HTMLFormElement>document.getElementById('signupForm')).reset();
        router.push("/login");
        }, 
        (error) => {
            alert(error.message);
        }
        );
    };
    submitSignUp();
}
</script>
<template>
<form @submit.prevent="signUpNew()" id="signupForm">
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
        <input type=button class="loginButtons" v-on:click="goToLogin()" value="Back to Login">
        <input type="button" class="loginButtons" v-on:click="signUpNew()" value="Sign up">
    </div>
</form>
</template>