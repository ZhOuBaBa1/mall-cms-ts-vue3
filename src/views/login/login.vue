<template>
  <div class="login">
    <LoginPanel></LoginPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue' //定义组件类型
import LoginPanel from './cpns/login-panel.vue'

export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return { LoginPanel }
  }
})
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
