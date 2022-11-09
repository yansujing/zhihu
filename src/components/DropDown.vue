<!-- 打开关闭都是由a决定，外面元素只要打开就关闭，内部元素打开的情况就不关闭 -->
<template>
  <div class="dropdown" ref="dropDom">
    <a class="btn btn-outline-light my-2 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" @click="changeDrop">
      {{userName}}
    </a>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" :style="{'display':isopen?'block':'none'}">
      <slot></slot>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '../hooks/useClickOutside'
export default defineComponent({
  name: 'DropDown',
  props: {
    userName: {
      type: String,
      required: true
    }
  },
  setup () {
    const dropDom = ref<null|HTMLElement>(null)
    const isClickOutside = useClickOutside(dropDom)
    console.log(26, isClickOutside)
    watch(isClickOutside, (newVal) => {
      if (newVal) {
        isopen.value = false
      }
    })
    // const handlerDrop = function (e:MouseEvent) {
    //   // console.log(e.target, dropDom.value.container(e.target))
    //   if (dropDom.value) {
    //     if (!dropDom.value.contains(e.target as HTMLElement) && isopen) {
    //       isopen.value = !isopen.value
    //     }
    //   }
    // }
    // onMounted(() => {
    //   document.addEventListener('click', handlerDrop)
    // })
    // onUnmounted(() => {
    //   document.removeEventListener('click', handlerDrop)
    // })
    const isopen = ref(false)
    const changeDrop = function () {
      isopen.value = !isopen.value
    }
    return {
      isopen,
      changeDrop,
      dropDom
    }
  }
})
</script>
