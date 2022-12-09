<template>
  <form>
    <slot name="default"></slot>
    <div @click.prevent="submitForm">
      <slot name="btn">
        <button type="button" class="btn btn-primary">确定</button>
      </slot>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
type ValidateFunc = () => boolean
type Emits<EventType extends string | symbol, T> = {
  on(type: EventType, handler: (arg: T) => void): void
  off(type: EventType, handler: (arg: T) => void): void
  emit(type: EventType, arg: T): void
}
type Emitter = Emits<'form-item-created', ValidateFunc>
export const emitter:Emitter = mitt()

export default defineComponent({
  emits: ['form-submit'],
  setup (props, context) {
    let funcArr:ValidateFunc[] = []
    const submitForm = () => {
      const validate = funcArr.map(func => func()).every(item => item)
      context.emit('form-submit', validate)
    }
    const onvalidateFn = (func:ValidateFunc) => {
      funcArr.push(func)
    }
    // 添加监听
    emitter.on('form-item-created', onvalidateFn)
    onUnmounted(() => {
      // 删除监听
      emitter.off('form-item-created', onvalidateFn)
      funcArr = []
    })
    return {
      submitForm,
      onvalidateFn
    }
  }
})
</script>
<style scoped>
</style>
