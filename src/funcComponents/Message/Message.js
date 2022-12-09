import { createApp } from 'vue'
import Message from './Message.vue'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function createMesssage () {
  const createInstance = createApp(Message)
  const node = document.createElement('div')
  node.id = 'message'
  document.body.appendChild(node)
  createInstance.mount(node)
  setTimeout(() => {
    document.body.removeChild(node)
  }, 2000)
}
export default createMesssage
