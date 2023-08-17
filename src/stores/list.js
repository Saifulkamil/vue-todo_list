import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const ListStore = defineStore('list', () => {

    const ListState = reactive({
        list: [
            {
                name: 'kamil',
                hobby: 'game',
                description: 'mobile legends'
            },
            {
                name: 'saiful',
                hobby: 'baca',
                description: 'baca buku'
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
