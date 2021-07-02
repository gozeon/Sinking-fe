<template>
  <el-row>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="名字">
        <el-input v-model="form.name" placeholder="用户id"></el-input>
      </el-form-item>

      <el-form-item label="角色">
        <el-select v-model="form.role" placeholder="请选择" disabled>
          <el-option label="管理员" value="admin"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" :loading="saveLoading" @click="handleSave"
          >添加</el-button
        >
      </el-form-item>
    </el-form>

    <el-divider></el-divider>

    <el-table :data="tableData">
      <el-table-column property="id" label="ID"></el-table-column>
      <el-table-column property="name" label="姓名"></el-table-column>
      <el-table-column property="role" label="角色"></el-table-column>
    </el-table>
  </el-row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { delay } from 'lodash'

const appModule = namespace('app')

@Component
export default class Auth extends Vue {
  form = {
    role: 'admin',
  }
  saveLoading = false

  @appModule.Action('addAuth') addAuth: any
  @appModule.State('auths') tableData: any

  handleSave() {
    this.saveLoading = true
    console.log(this.form)

    this.addAuth(this.form)
    delay(() => (this.saveLoading = false), 1800)
  }
}
</script>
