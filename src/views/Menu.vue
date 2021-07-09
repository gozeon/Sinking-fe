<template>
  <div>
    <el-button type="primary" @click="createDialogVisible = true"
      >新建</el-button
    >
    <el-divider></el-divider>

    <el-tree :data="treeData" :allow-drop="allowDrop" draggable>
      <el-row
        class="w-full"
        type="flex"
        justify="space-between"
        align="middle"
        slot-scope="{ node, data }"
      >
        <div>{{ node.label }}</div>
        <i class="el-icon-delete" @click="handleDelete(node, data)"></i>
      </el-row>
    </el-tree>

    <el-dialog title="新建" :visible.sync="createDialogVisible" append-to-body>
      <el-form :model="createForm" :rules="createFormRule" ref="createForm">
        <el-form-item label="类型">
          <el-select v-model="createForm.type">
            <el-option label="菜单" value="menu"></el-option>
            <el-option label="菜单项" value="menuItem"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="名称" prop="label">
          <el-input v-model="createForm.label"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button type="primary" @click="handleCreateForm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Menu extends Vue {
  treeData = [
    {
      id: 1,
      label: '菜单1',
      type: 'menu',
      children: [
        {
          id: 2,
          label: '菜单项1',
          type: 'menuItem',
        },
      ],
    },
    {
      id: 3,
      label: '菜单2',
      type: 'menu',
    },
    {
      id: 4,
      label: '菜单4',
      type: 'menu',
      children: [
        {
          id: 5,
          label: '菜单项2',
          type: 'menuItem',
        },
      ],
    },
  ]

  createDialogVisible = false
  createForm = {
    type: 'menu',
    label: '',
  }
  createFormRule = {
    label: [{ required: true, message: '必填项', trigger: 'blur' }],
  }

  handleDelete(node: any, data: any) {
    const parent = node.parent
    const children = parent.data.children || parent.data
    const index = children.findIndex((d: any) => d.id === data.id)
    children.splice(index, 1)
  }

  allowDrop(draggingNode: any, dropNode: any, type: any) {
    console.log(draggingNode.data.label, draggingNode.data.id)
    console.log(dropNode.data.label, dropNode.data.id)
    console.log(type)

    // 拖动菜单
    if (draggingNode.data.type === 'menu') {
      // 不能与菜单项在一起
      if (dropNode.data.type === 'menuItem') {
        return false
      }

      // 不能前套在菜单里
      if (type === 'inner') {
        return false
      }

      return true
    }

    // 拖动菜单项
    if (draggingNode.data.type === 'menuItem') {
      if (dropNode.data.type === 'menuItem' && type !== 'inner') {
        return true
      } else if (
        dropNode.data.type === 'menu' &&
        (type === 'inner' || type === 'prev' || type === 'next')
      ) {
        return true
      }
    }

    return false
  }

  handleCreateForm() {
    ;(this.$refs as any).createForm.validate((valid: boolean) => {
      if (valid) {
        this.treeData = [
          ...this.treeData,
          {
            id: +Date.now(),
            ...this.createForm,
          },
        ]

        this.createDialogVisible = false
      }
    })
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-dialog__body {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
