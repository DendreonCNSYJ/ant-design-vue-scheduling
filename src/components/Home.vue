<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible :trigger="null">
      <div class="logo" />
      <!-- <layoutSider></layoutSider> -->
      <a-menu :default-selected-keys="['1']" :default-open-keys="['sub1']" mode="inline" theme="dark"
        :inline-collapsed="collapsed">
        <a-menu-item key="1">
          <a-icon type="home" />
          <span>首页</span>
        </a-menu-item>

        <a-menu-item key="2">
          <a-icon type="user" />
          <span>用户信息维护</span>
          <router-link :to="{ name: 'users' }">用户信息维护</router-link>
        </a-menu-item>

        <a-menu-item key="3">
          <a-icon type="user" />
          <span>病人信息维护</span>
        </a-menu-item>

        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="appstore" /><span>采血信息维护</span>
          </span>
          <a-menu-item key="5">
            功能1
          </a-menu-item>
          <a-menu-item key="6">
            功能2
          </a-menu-item>
          <a-menu-item key="7">
            功能3
          </a-menu-item>
          <a-menu-item key="8">
            功能4
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="appstore" /><span>输血信息维护</span>
          </span>
          <a-menu-item key="9">
            功能1
          </a-menu-item>
          <a-menu-item key="10">
            功能2
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub4">
          <span slot="title">
            <a-icon type="appstore" /><span>生产信息维护</span>
          </span>
          <a-menu-item key="11">
            功能1
          </a-menu-item>
          <a-menu-item key="12">
            功能2
          </a-menu-item>

          <!-- <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">
            Option 11
          </a-menu-item>
          <a-menu-item key="12">
            Option 12
          </a-menu-item>
        </a-sub-menu> -->

        </a-sub-menu>

      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="trigger">
        <a-icon :type="collapsed ? 'menu-fold' : 'menu-unfold'" style="trigger" @click="collapsed = !collapsed">
        </a-icon>
        <layoutHeader class="header"></layoutHeader>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px;">
        <router-view></router-view>
      </a-layout-content>
      <!-- <a-layout-footer class="footer">
        <layoutFooter></layoutFooter>
      </a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>
<script>
// import layoutFooter from './Footer.vue'
import layoutHeader from './Header.vue'
export default {
  components: {
    // layoutFooter,
    layoutHeader,
  },
  data () {
    return {
      collapsed: false,
    }
  },
}
</script>

<style scoped>
.trigger {
  background: #fff;
  padding: 0 20px;
  line-height: 64px;
  font-size: 25px;
}
.header {
  float: right;
  padding: 0 20px;
}
.footer {
  text-align: center;
  background-color: #a0ffff;
}
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
