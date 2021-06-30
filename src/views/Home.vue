<template>
  <el-container>
    <el-main>
      <h1 class="title">Sinking</h1>
      <el-row class="mt-10" type="flex" justify="center">
        <el-col :md="12" :sm="24">
          <el-input
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            v-model="search"
            @keyup.enter.native="handleSearch"
          ></el-input>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center" class="mt-10">
        <el-col :md="12" :sm="24">
          <el-tag
            v-for="item in tags"
            :key="item.id"
            size="small"
            class="mr-5"
            :type="item.select ? '' : 'info'"
            @click="handleSelect(item)"
          >
            {{ item.name }}
          </el-tag>
        </el-col>
      </el-row>

      <el-row :gutter="10" v-loading="searchLoading">
        <el-col
          :md="6"
          :sm="24"
          class="mt-10"
          v-for="item in projects"
          :key="item.id"
        >
          <el-card shadow="hover">
            <div slot="header">
              <span>{{ item.name }}</span>
            </div>
            {{ item.description }}
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { delay } from 'lodash'

const dictKeyModule = namespace('dictkey')
const projectModule = namespace('project')

@Component
export default class Home extends Vue {
  search: string = ''
  searchLoading: boolean = false
  @dictKeyModule.State('tags') tags: any
  @projectModule.State('projects') projects: any
  @dictKeyModule.Mutation('toggleSelectTag') toggleSelectTag: any
  @dictKeyModule.Getter('selectTags') selectTags: any

  handleSearch() {
    this.searchLoading = true
    this.$message.success('search: ' + this.search)
    console.log(this.selectTags)
    delay(() => {
      this.searchLoading = false
    }, 1800)
  }

  handleSelect(tag: any) {
    this.toggleSelectTag(tag.id)
    this.handleSearch()
  }
}
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
}

.el-container {
}

.el-tag,
.el-card {
  cursor: pointer;
}

::v-deep .el-card__body {
  height: 100px;
  overflow: auto;
}
</style>
