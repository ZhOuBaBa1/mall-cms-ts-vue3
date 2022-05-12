<template>
  <div class="nav-header">
    <!-- <el-radio-button :label="false">expand</el-radio-button> -->
    <el-icon :size="30">
      <component
        class="fold-menu"
        :is="iconName"
        @click="handleFoldClick"
      ></component>
    </el-icon>
    <div class="content">
      <hy-breadcrumb :breadcrumbs="breadcrumbs"></hy-breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'
import HyBreadcrumb from '@/base-ui/breadcrumb'

import { useRoute } from 'vue-router'
import { useStore } from '@/store'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  components: {
    Fold,
    Expand,
    UserInfo,
    HyBreadcrumb
  },
  emits: ['foldChange'],
  setup(porps, { emit }) {
    let iconName = ref('Expand')
    const isFold = ref(false)
    // 这里是点击图标可以进行切换，自己想的实现方法，可能不太好，但是功能实现了
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      if (isFold.value == false) {
        iconName.value = 'Fold'
      } else {
        iconName.value = 'Expand'
      }
      emit('foldChange', isFold.value)
    }

    //面包屑的数据[{name: , path: }]
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      iconName,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 15px;
  }
}
</style>
