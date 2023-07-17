import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useInpStore = defineStore('inp', () => {
    const inp = ref([])
    return { inp }
})

export default {useInpStore}

