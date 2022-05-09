import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const showForm = reactive({
    isVisible: false,
    index: 0,
    showDetailedSer: false,
})
