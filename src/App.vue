<template>
  <GlobalHeader :user-info="userProp" />
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { Iuser } from './components/GlobalHeader.vue'
const userProp: Iuser = {
  isLogin: false,
  name: '严素静'
}

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup () {
    const app = getCurrentInstance()
    console.log(app?.appContext.config.globalProperties.$Message())
    return {
      userProp
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
