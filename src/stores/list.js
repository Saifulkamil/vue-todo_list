import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const ListStore = defineStore('list', () => {

    const ListState = reactive({
        list: [
            {
                title: "Test",
                description: "Test Description",
                category: "A"
              }

        ]
    })

    const getList = computed(() => ListState.list)

    const getItem = (index) => computed(() => ListState.list[index])


    function addToList(params) {
        if (params) {
            ListState.list.push({ ...params })
        }
    }

    const removeItem = (index) => {
        ListState.list.splice(index, 1)
    }
    const editItem = (index, data) => {
        ListState.list[index] = data
    }

    return { ListState, getList, addToList, removeItem, editItem, getItem }
})
