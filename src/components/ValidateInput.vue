<template>
  <div class="validate-input-container pb-3">
    <!-- is-invalid -->
    <input class="form-control" id="validationServer03" :value="inputRef.val" @blur="blurRule" @input="inputFn" v-bind="$attrs"/>
    <span v-if="inputRef.error" class="invalid-feedback" style="display:inline-block;">{{inputRef.message}}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
import { emitter } from './ValidateForm.vue'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
interface RuleProp {
  type:'required'|'email';
  message:string;
}
export type RulesProp=RuleProp[]
export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  inheritAttrs: false,
  setup (props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    const blurRule = () => {
      if (props.rules) {
        const allPassed = props.rules.every(item => {
          inputRef.message = item.message
          let ispassed = true
          switch (item.type) {
            case 'required':
              ispassed = !(inputRef.val.trim() === '')
              break
            case 'email':
              ispassed = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return ispassed
        })
        inputRef.error = !allPassed
        return allPassed
      } else {
        return false
      }
    }
    const inputFn = (e:KeyboardEvent) => {
      const value = (e.target as HTMLInputElement).value
      inputRef.val = value
      context.emit('update:modelValue', value)
    }
    emitter.emit('form-item-created', blurRule)
    return {
      inputRef,
      blurRule,
      inputFn
    }
  }
})
</script>
<style>
</style>
