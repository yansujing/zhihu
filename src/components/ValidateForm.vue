<template>
  <form>
    <slot name="default"></slot>
    <div style="background:red" @click.prevent="submitForm">
      <slot name="btn">
        <button type="button" class="btn btn-primary">确定</button>
      </slot>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['form-submit'],
  setup (props, context) {
    const submitForm = () => {
      context.emit('form-submit', true)
    }
    return {
      submitForm
    }
  }
})
</script>
<style scoped>
</style>
