import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const ListStore = defineStore('list', () => {

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

    // getter
    const getList = computed(() => list)

    // action
    function addList(params) {
        if (params) {
            list.value.push({ name: params })
        }
    }

    return { list, getList, addList }
})