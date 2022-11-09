<template>
  <li :class="{'disabled-class':disabled}">
    <!-- <a class="dropdown-item" href="#">yansujing</a> -->
    <slot></slot>
  </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DropDownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style scoped>
.disabled-class *{
  color: #6c757d;
  /* font-size: 30px; */
  pointer-events: none;
  background-color: transparent;
}
</style>
