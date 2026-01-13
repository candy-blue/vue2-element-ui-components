<template>
  <el-button type="primary" @click="$emit('click')">
    <slot>按钮</slot>
  </el-button>
</template>

<script>
export default {
  name: "BaseButton"
};
</script>
