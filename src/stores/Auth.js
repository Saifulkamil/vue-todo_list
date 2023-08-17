import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('list', () => {

    const ListUser = reactive([

        {
            id: undefined,
            name: undefined,
            role: undefined
        },
    ])

    const getList = computed(() => ListUser)

    return { getList }

})