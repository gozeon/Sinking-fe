<template>
  <div>
    <el-button type="primary">新建</el-button>
    <el-divider></el-divider>

    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="名字"></el-table-column>
      <el-table-column prop="desc" label="描述"></el-table-column>
      <el-table-column prop="creatUser" label="创建人"></el-table-column>
      <el-table-column prop="creatTime" label="创建时间"></el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const appModule = namespace('app')

// TODO: infiniteScroll
@Component
export default class Page extends Vue {
  @appModule.State('pages') tableData: any
}
</script>
