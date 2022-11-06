<template>
    <div class="container-fluid">
        <div class="row w-100">
            <div class="col-md-5 col-sm-12 login-form border rounded p-3 h-50">
                <h1 class="text-center">Login Form</h1>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"
                        placeholder="name@example.com" v-model="emailLogin">
                    <p class="text-danger">{{ErrorEmailLogin}}</p>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput2" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput2" v-model="passwordLogin">
                    <p class="text-danger">{{ErrorPasswordLogin}}</p>
                </div>

                <button class="btn btn-success" @click="login">Login</button>

                <p class="text-danger">If you dont have account please register</p>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-5 col-sm-12 register-form border rounded p-3">
                <h1 class="text-center">Register Form</h1>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name & Family</label>
                    <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="John Doe"
                        v-model="nameRegister">
                    <p class="text-danger">{{ErrorNameRegister}}</p>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput2" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput2"
                        placeholder="name@example.com" v-model="emailRegister">
                    <p class="text-danger">{{ErrorEmailRegister}}</p>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput3" class="form-label">Phone Number</label>
                    <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="+2144556677"
                        v-model="phoneRegister">
                    <p class="text-danger">{{ErrorPhoneRegister}}</p>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput4"
                        v-model="passwordRegister">
                    <p class="text-danger">{{ErrorPasswordRegister}}</p>
                </div>
                <button class="btn btn-success" @click="register">Register</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const ErrorEmailLogin = ref('')
        const emailLogin = ref('')
        const ErrorPasswordLogin = ref('')
        const passwordLogin = ref('')
        const ErrorEmailRegister = ref('')
        const emailRegister = ref('')
        const ErrorPasswordRegister = ref('')
        const passwordRegister = ref('')
        const ErrorPhoneRegister = ref('')
        const phoneRegister = ref('')
        const ErrorNameRegister = ref('')
        const nameRegister = ref('')
        function login() {
            if (emailLogin.value === '') {
                ErrorEmailLogin.value = 'please enter your email'
            }
            else {
                ErrorEmailLogin.value = ''
            }
            if (passwordLogin.value === '') {
                ErrorPasswordLogin.value = 'please enter your password'
            }
            else {
                ErrorPasswordLogin.value = ''
            }
        }
        function register() {
            if (emailRegister.value === '') {
                ErrorEmailRegister.value = 'please enter your email'
            }
            else {
                ErrorEmailRegister.value = ''
            }
            if (nameRegister.value === '') {
                ErrorNameRegister.value = 'please enter your name'
            }
            else {
                ErrorNameRegister.value = ''
            }
            if (passwordRegister.value === '') {
                ErrorPasswordRegister.value = 'please enter your password'
            }
            else {
                ErrorPasswordRegister.value = ''
            }
            if (phoneRegister.value === '') {
                ErrorPhoneRegister.value = 'please enter your phone'
            }
            else {
                ErrorPhoneRegister.value = ''
            }
        }

        return {
            ErrorEmailLogin, emailLogin, ErrorPasswordLogin, passwordLogin, login, ErrorPhoneRegister, phoneRegister, ErrorPasswordRegister, passwordRegister, ErrorNameRegister, nameRegister, ErrorEmailRegister, emailRegister, register
        }
    }
}
</script>

<style scoped>
.container-fluid {
    height: 100vh;

    background: #00969b;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.login-form,
.register-form {
    background: rgb(1, 108, 127);
    display: flex;

    flex-direction: column;
}
input{
    background: #00969b;
    border: transparent;
}
input:focus{
    background: rgb(0, 97, 61);
 
}
</style>