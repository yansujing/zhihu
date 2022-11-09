<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">者也专栏</a>
    <ul class="list-inline mb-0" v-if="!userInfo.isLogin">
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登陆</a></li>
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <DropDown :user-name="`你好 ${userInfo.name}`">
          <DropDownItem>
            <a class="dropdown-item" href="#">新建文章</a>
          </DropDownItem>
          <DropDownItem disabled>
            <a class="dropdown-item" href="#">编辑资料</a>
          </DropDownItem>
          <DropDownItem disabled>
            <a class="dropdown-item" href="#">退出登录</a>
          </DropDownItem>
        </DropDown>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import DropDown from './DropDown.vue'
import DropDownItem from './DropDownItem.vue'
export interface Iuser {
  isLogin:boolean;
  id?:number;
  name?:string
}

export default defineComponent({
  name: 'GlobalHeader',
  components: { DropDown, DropDownItem },
  props: {
    userInfo: {
      type: Object as PropType<Iuser>,
      required: true
    }
  }
})
</script>
