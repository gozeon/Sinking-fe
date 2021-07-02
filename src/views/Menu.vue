<template>
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
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Menu extends Vue {
  treeData = [
    {
      id: 1,
      label: 'a',
      children: [
        {
          id: 2,
          label: 'a1',
        },
      ],
    },
    {
      id: 3,
      label: 'b',
    },
  ]

  handleDelete(data: any) {
    console.log(
      '🚀 ~ file: Menu.vue ~ line 33 ~ Menu ~ handleDelete ~ data',
      data
    )
  }
  allowDrop(draggingNode: any, dropNode: any, type: any) {
    console.log(
      '🚀 ~ file: Menu.vue ~ line 37 ~ Menu ~ allowDrop ~ draggingNode:any, dropNode:any, type: any',
      draggingNode,
      dropNode,
      type
    )
  }
}
</script>
