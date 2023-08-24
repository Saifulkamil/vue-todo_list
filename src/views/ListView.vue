<script setup>
import { ref } from 'vue'
import { ListStore } from '@/stores/list';
const store = ListStore();
const datainput = {
  name: '',
  hobby: '',
  description: '',

}
const input = ref({ ...datainput });
const editing = ref(false)
const resetForm = () => {
  Object.assign(input.value, datainput)
}

function detailList(index) {
  const detail = store.getItem(index)

  input.value = { ...detail.value }

  editing.value = index
}



function onSubmit() {
  const data = { ...input.value }

  if (editing.value === false) {
    store.addToList(data)

  } else {
    store.editItem(editing.value, data)
  }
  resetForm()

}

function toggleComplete(index) {
  const detail = store.getDetail(index)

  store.editList(index, {
    ...detail.value,
    completed: !detail.value.completed
  })
}

</script>

<template>
  <div class="list">
    <h1>Taks</h1>


    <h3>Nama</h3>
    <form class="form" @submit.prevent="onSubmit">
      <input class="input" type="text" v-model="input.name" placeholder="sepol" required />
      <h3>Decripsi</h3>
      <input class="input" type="text" v-model="input.hobby" placeholder="main game" required />
      <h3>Hobby</h3>
      <input class="input" type="text" v-model="input.description" placeholder="main aja" />
      <div class="checkbox">
        <input type="checkbox" v-model="input.completed" name="completed" id="completed"> Completed
      </div>
      <button class="submit" type="submit">Submit</button>

    </form>

    <h3>List Todo</h3>
    <ol class="list">
      <template v-for="item, index in store.getList" :key="index">

        <li @dblclick="toggleComplete(index)">
          <button class="hapus" @click="() => store.removeItem(index)">hapus</button>
          <button class="Edit" @click="() => detailList(index)">Edit</button>
          {{ item.name }} ({{ item.hobby }}) {{ !!item?.description ? item.description : 'description?' }}
        </li>
      </template>
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
</style>
