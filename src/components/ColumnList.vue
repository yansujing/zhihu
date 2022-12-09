<template>
<div class="row">
  <div class="col-4 mb-4" v-for="column in columnList" :key="column.id">
    <div class="card h-100 shadow-sm">
      <div class="card-body text-center">
        <img :src="column.avatar" class="rounded-circle border border-light w-25 my-3">
        <h5 class="card-title">{{column.title}}</h5>
        <p class="card-text text-left">{{column.description}}</p>
        <a href="#" class="btn btn-outline-primary" @click.prevent="goDetail(column.id)">进入专栏</a>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'

export interface ColumnProps {
  id:number;
  title:string;
  avatar?:string;
  description:string;
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    const columnList = computed(() => {
      return props.list.map(item => {
        if (!item.avatar) {
          item.avatar = require('@/assets/logo.png')
        }
        return item
      })
    })
    const router = useRouter()
    const goDetail = (id:number) => {
      // router.push(`/columndetail/${id}`)
      router.push({
        name: 'columnDetail',
        params: {
          id
        },
        query: {
          ysj: 'ysj'
        }
      })
    }
    return {
      columnList, goDetail
    }
  }
})
</script>
