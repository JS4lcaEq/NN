<script setup>
import { reactive, computed } from 'vue'

import TheWelcome from "../components/TheWelcome.vue";
import { useDimStore } from '@/stores/dim'
import { useInpStore } from '@/stores/inp'

const dim = reactive({ width: 8, height: 12 })
const ret = reactive(["0", "1", "2", "3"])
const dimS = useDimStore()
const inp = useInpStore()
function onSet() {
  // dimS.increment()
  let len = dimS.dim.height * dimS.dim.width
  let a = []
  for (let i = 0; i < len; i++) {
    a[i] = 0
  }
  inp.inp = a
}
</script>

<template>
  <div id="home-view">
    <h2>HomeView</h2>
    <h3>Params</h3>
    <el-form :model="dimS" label-width="120px">

      <el-form-item label="Height:">
        <el-input v-model="dimS.dim.height" />
      </el-form-item>

      <el-form-item label="Width:">
        <el-input v-model="dimS.dim.width" />
      </el-form-item>

      <el-form-item label=" ">
        <el-button @click="onSet">Setup</el-button>
      </el-form-item>

    </el-form>
    <p>{{ dimS }}</p>
    <p>{{ inp }}</p>
  </div>
</template>
<style>

</style>
