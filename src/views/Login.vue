<template>
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
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
export default defineComponent({
  components: { ValidateForm, ValidateInput },
  setup () {
    const validateRule = reactive<RulesProp>([{ type: 'required', message: '请输入邮箱' }, { type: 'email', message: '请输入正确的邮箱' }])
    const validatePasswprdRule = reactive<RulesProp>([{ type: 'required', message: '请输入密码' }])
    const inputVal = ref('')
    const onformSubmit = (val:boolean) => {
      console.log('提交成功', val)
    }
    return {
      validateRule,
      validatePasswprdRule,
      inputVal,
      onformSubmit
    }
  }
})
</script>
