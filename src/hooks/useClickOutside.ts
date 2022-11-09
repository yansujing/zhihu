import { ref, Ref, onMounted, onUnmounted } from 'vue'
const useClickOutside = function (elementRef:Ref<null|HTMLElement>):Ref<boolean> {
  const isClickOutside = ref(false)
  const handleFn = function (e:MouseEvent) {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handleFn)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handleFn)
  })
  return isClickOutside
}

export default useClickOutside
