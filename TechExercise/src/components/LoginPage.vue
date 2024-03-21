<script setup lang="ts">
import axios from 'axios';
import router from '@/router';

let isAuthenticated: any;
let validationEmailPassed = false;
let validationPasswordPassed = false;


function loginSignup(buttonType: string) {
    if (buttonType != "login") {
        goToSignup()
    } else {
        console.log("inside else")
        attemptLogin();
    }
}

function attemptLogin() {
    const Login = () => {
        let form = new FormData();
        let email = (<HTMLInputElement>document.getElementById("email")).value;
        let password = (<HTMLInputElement>document.getElementById("password")).value;
        form.append("email", email);
        form.append("password", password);
        axios.post('http://127.0.0.1:8000/login/', form)
            .then(response => 
            {
                isAuthenticated = response.data;
                sessionStorage.setItem("isAuthenticated", "true")
                sessionStorage.setItem("email", email)
                router.push("/")
            }, 
            (error) =>
            {
                alert(error.message + "\nMay be due to incorrect email or password");
            });
    };
    Login();
    
}
function goToSignup() {
    router.push({ path: '/signup' });
}

</script>
<template>
<form @submit.prevent="attemptLogin()">
    <div class="EmailBox">
        <label for="email" class="inputLabel">Enter Email</label>
        <input type="text" name="email" id="email" class="inputFields">
    </div>
    <div class="PasswordBox">
        <label for="password" class="inputLabel">Enter Password</label>
        <input type="text" name="password" id="password" class="inputFields"/>
    </div>
    <div class="LoginBox">
        <input type=button class="loginButtons" v-on:click="loginSignup('login')" value="Log in">
        <input type="button" class="loginButtons" v-on:click="loginSignup('signup')" value="Go to Sign up">
    </div>
</form>
</template>

<style>

.inputFields {
    width: 30rem;
    height: 2rem;
}

.EmailBox {
    display: flex;
    justify-content: center;
    margin-top: 15px;
}

.PasswordBox {
    margin-top: 15px;
    display: flex;
    justify-content: center;
}

.LoginBox {
    margin-top: 15px;
    display: flex;
    justify-content: center;
}

.inputLabel {
    align-items: left;
    text-align: left;
    width: 8rem;
}

.loginButtons {
    margin: 5px;
}

</style>