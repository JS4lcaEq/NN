<script setup>
import { reactive, computed } from 'vue'

import TheWelcome from "../components/TheWelcome.vue";
import { useDimStore } from '@/stores/dim'

const dim = reactive({width: 8, height: 12})
const ret = reactive(["0","1","2","3"])
const dimS = useDimStore()
function onSet(){
  dimS.increment()
}
</script>

<template>
  <div id="home-view">
    <h2>HomeView</h2>
    <h3>Params</h3>
    <label>
      <span>Height:</span>
      <input v-model="dimS.dim.height" />
    </label>
    <label>
      <span>Width:</span>
      <input v-model="dimS.dim.width" />
    </label>
    <label>
      <span>&nbsp;</span>
      <button @click="onSet" >Setup</button>
    </label>
    <p>{{ dimS }}</p>
  </div>
</template>
<style>
label {
  display: block;
  margin: 5px;
}
label span {
  width: 110px;
  display: inline-block;
  text-align: right;
}
</style>
