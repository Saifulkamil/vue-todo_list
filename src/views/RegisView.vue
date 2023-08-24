<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { RouterLink, useRouter } from 'vue-router';
import Cookies from 'js-cookie';
const router = useRouter();

const name = ref('');
const username = ref('');
const token = ref('');
const password = ref('');
const errorMessage = ref('');

const regis = async () => {
  try {
    const response = await axios.post('https://be.tautan.tk/auth/register', {
      name: name.value,
      username: username.value,
      password: password.value,
    },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
    console.log(response.data)
    if (response.status === 200 || response.status === 201) {
      token.value = response.data.token;
      Cookies.set('token', token.value);
      router.push('/login');
    } else if (response.status === 400) {
      console.log("salah email ataun password")
    }
  } catch (error) {
    errorMessage.value = 'Login failed. Please check your credentials.';
  }
};


</script>

<template>
  <div class="list">
    <h1>Register</h1>


    <h3>Nama</h3>
    <form class="form" @submit.prevent="regis">

      <input class="input" v-model="name" type="text" placeholder="Nama" required />
      <h3>Username</h3>
      <input class="input" v-model="username" type="text" placeholder="Username" required />
      <h3>password</h3>
      <input class="input" v-model="password" type="password" placeholder="password" />

      <button class="submit" type="submit">Regis</button>


    </form>

    <h3 id="Login">Sudah Punya Akun? <span>
        <RouterLink to="/login" id="btnmasuk">Masuk</RouterLink>
      </span></h3>

  </div>
</template>

<style scoped>
.input {
  display: flex;
  margin-bottom: 20px;
  padding: 5px;
  font-size: 1rem;
  border-radius: 10px;

}

.list {
  margin-block: 0.5rem;
  padding-bottom: 2rem;
  color: hsla(160, 100%, 37%, 1);
}

.submit {
  border-radius: 10px;
  height: 2rem;
}

#Login {
  padding-top: 1rem;
  color: rgb(184, 184, 184);
}

#btnmasuk {
  color: hsla(160, 100%, 37%, 1);

}
</style>
