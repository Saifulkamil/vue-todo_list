<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { RouterLink, useRouter } from 'vue-router';
import Cookies from 'js-cookie';
const router = useRouter();

const email = ref('');
const token = ref('');
const password = ref('');
const errorMessage = ref('');

const login = async () => {
  try {
    const response = await axios.post('https://reqres.in/api/login', {
      // email: name.value,
      // username: username.value,
      // password: password.value,

      email: email.value,
      password: password.value,
    },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
    console.log(response.data)
    if (response.status === 200) {
      token.value = response.data.token;
      console.log("berhasil masuk")
      Cookies.set('token', token.value);
      router.push('/list');
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
    <h1>Login</h1>


    <form class="form" @submit.prevent="login">
      <h3>Username</h3>
      <input class="input" v-model="email" type="text" placeholder="Username" required />
      <h3>Password</h3>
      <input class="input" v-model="password" type="password" placeholder="Password" required />

      <button class="submit" type="submit">Login</button>

    </form>


    <h3 id="daftar">Belum Punya Akun? <span>
        <RouterLink to="/regis" id="btndaftar">Daftar</RouterLink>
      </span></h3>

    <ol class="list">
      <!-- <template v-for="item, index in store.getList" :key="index">
      </template> -->
    </ol>
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

#daftar {
  padding-top: 1rem;
  color: rgb(184, 184, 184);
}

#btndaftar {
  color: hsla(160, 100%, 37%, 1);
}
</style>
