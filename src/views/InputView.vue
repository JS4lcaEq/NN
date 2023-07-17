<script setup>
import { reactive, computed } from 'vue'
import { useDimStore } from '@/stores/dim'
import { useInpStore } from '@/stores/inp'
const dim = reactive({ width: 8, height: 12 })

const ndx = reactive(0)
const dimS = useDimStore()
const w = computed(() => dimS.dim.width * 32 + 'px')
const y = computed(() => dimS.dim.height * 32 + 'px')
const inp = useInpStore()
function onSet() {
  dimS.increment()
}
</script>

<template>
  <div id="input-view">
    <h2>InputView</h2>
    <p>{{ w }}</p>
    <div class="aspect-ratio" :style="{ width: w, height: y }">
      <div v-for="(item, index) in inp.inp" > {{ ndx++ }}</div>
    </div>
    <div class="space"></div>
    <!-- <p>dimS = {{ dimS }}</p> -->
  </div>
</template>
<style>
.aspect-ratio {
  background-color: #cfc;
  height: 100px;
}
.aspect-ratio div {
  width: 30px;
  height: 30px;
  float: left;
  background-color: #ccc;
  margin: 1px;
}
.space {
  clear: both;
}
</style>
