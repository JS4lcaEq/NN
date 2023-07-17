import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDimStore = defineStore('dim', () => {
    const dim = ref({ width: 8, height: 12 })
    function increment() {
        dim.value.width++
        dim.value.height++
    }

    return { dim, increment }
})

export default {useDimStore}

