<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="ID">
      <el-input v-model="$route.params.id" disabled></el-input>
    </el-form-item>

    <el-form-item label="应用名字">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="应用描述">
      <el-input
        type="textarea"
        v-model="form.description"
        rows="3"
        maxlength="300"
        show-word-limit
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" :loading="saveLoading" @click="handleSave"
        >保存</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { delay } from 'lodash'

const appModule = namespace('app')

@Component
export default class Setting extends Vue {
  form = {}
  saveLoading = false

  handleSave() {
    this.saveLoading = true
    console.log(this.form)
    delay(() => (this.saveLoading = false), 1800)
  }
}
</script>
