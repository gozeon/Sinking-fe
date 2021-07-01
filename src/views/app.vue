<template>
  <el-container>
    <el-header>
      <el-row type="flex" justify="space-between" align="middle" class="h-full">
        <router-link to="/" tag="h3" class="pointer">Sinking</router-link>
        <el-dropdown>
          <span class="pointer">Admin</span>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link
                :to="{ name: 'Login', query: { nextUrl: $route.fullPath } }"
                tag="div"
                class="pointer"
                >退出</router-link
              >
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :collapse="false" router :default-active="$route.name">
          <el-menu-item
            v-for="item in menus"
            :key="item.icon"
            :index="item.route.name"
            :route="item.route"
          >
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { delay } from 'lodash'

@Component
export default class Home extends Vue {
  menus: any[] = [
    { title: '菜单设置', icon: 'el-icon-menu', route: { name: 'App.Menu' } },
    {
      title: '页面设置',
      icon: 'el-icon-document',
      route: { name: 'App.Page' },
    },
    {
      title: '权限设置',
      icon: 'el-icon-s-custom',
      route: { name: 'App.Auth' },
    },
    { title: '统计', icon: 'el-icon-s-data', route: { name: 'App.Analysis' } },
    { title: '设置', icon: 'el-icon-setting', route: { name: 'App.Setting' } },
  ]
}
</script>

<style lang="scss" scoped>
.el-aside {
  height: calc(100vh - 60px);
}

.el-menu {
  height: 100%;
}
</style>
