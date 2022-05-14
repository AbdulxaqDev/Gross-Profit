import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const showForm = reactive({
    isVisible: false,
    index: '',
    showDetailedSer: false,
    hideBotForm: () => {
        this.isVisible = false;
    }
})

export const mobileNav = reactive({
    isVisible: false,
})
