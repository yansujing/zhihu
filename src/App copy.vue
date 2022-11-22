<template>
  <GlobalHeader :user-info="userProp"/>
  <div class="container">
    <!-- Content here -->
    <ColumnList :list="propList"/>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model.trim="formData.val" @blur="emailBlur"/>
      <div v-if="formData.error">{{formData.message}}</div>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { Iuser } from './components/GlobalHeader.vue'
const userProp:Iuser = {
  isLogin: true,
  name: '严素静'
}
const propList:ColumnProps[] = [{
  id: 1,
  title: 'test1的专栏',
  description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
  avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
}, {
  id: 2,
  title: 'test2的专栏',
  description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
  avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
}, {
  id: 3,
  title: 'test3的专栏',
  description: '这是的test3专栏，有一段非常有意思的简介，可以更新一下欧'
  // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
}]
export default defineComponent({
  name: 'App',
  components: {
    ColumnList, GlobalHeader
  },
  setup () {
    const formData = reactive({
      val: '',
      message: '',
      error: false
    })
    const emailBlur = function () {
      if (formData.val === '') {
        formData.error = true
        formData.message = '请输入邮箱'
      } else {
        formData.error = false
      }
    }
    return {
      propList,
      userProp,
      formData,
      emailBlur
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
