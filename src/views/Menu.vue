<template>
  <div>
    <el-button size="mini">新建</el-button>
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
        <i class="el-icon-delete" @click="handleDelete(data)"></i>
      </el-row>
    </el-tree>
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

  handleDelete(data: any) {
    console.log(
      '🚀 ~ file: Menu.vue ~ line 33 ~ Menu ~ handleDelete ~ data',
      data
    )
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
      } else if (dropNode.data.type === 'menu' && type === 'inner') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
