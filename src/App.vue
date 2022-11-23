<template>
  <GlobalHeader :user-info="userProp"/>
  <div class="container">
    <!-- Content here -->
    <!-- <ColumnList :list="propList"/> -->
    <ValidateForm @form-submit="onformSubmit">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <ValidateInput :rules="validateRule" v-model="inputVal" type="text" placeholder="请输入邮箱"/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <ValidateInput :rules="validatePasswprdRule" type="password" placeholder="请输入密码"/>
      </div>
      <template #btn>
        <button type="button" class="btn btn-primary">提交</button>
      </template>
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { Iuser } from './components/GlobalHeader.vue'
import ValidateForm from './components/ValidateForm.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
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
    GlobalHeader, ValidateForm, ValidateInput
  },
  setup () {
    const validateRule = reactive<RulesProp>([{ type: 'required', message: '请输入邮箱' }, { type: 'email', message: '请输入正确的邮箱' }])
    const validatePasswprdRule = reactive<RulesProp>([{ type: 'required', message: '请输入密码' }])
    const inputVal = ref('')
    const onformSubmit = (val:boolean) => {
      console.log('提交成功', val)
    }
    return {
      propList,
      userProp,
      validateRule,
      validatePasswprdRule,
      inputVal,
      onformSubmit
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
