<script setup>
import { ref } from 'vue'

const list = ref([
  {
    name: "firts saiful",
    no: "234"

  },
  {
    name: "firts kamil",
    no: "234234"

  }

])


const input = ref({ name: '', no: '' })
const addToList = () => {

  if (input.value.name.trim() !== '') {

    list.value.push({
      name: input.value.name
    })
    input.value.name = ''
  }
}
</script>

<template>
  <div class="list">
    <h1>ini Halaman List View</h1>
    <ol class="itemlist ">
      <template v-for="(item, index) in list" :key="index">
        <li>{{ item.name }}</li>
      </template>
    </ol>
    <input class="input" v-model="input.name" type="text" @keyup.enter="addToList" />
  </div>
</template>

<style scoped>
.input {
  padding: 0.5rem;
  font-size: 1rem;
  margin-top: 1rem;
  border-radius: 10px;

}

.list {
  margin-block: 0.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: hsla(160, 100%, 37%, 1);
}
</style>
