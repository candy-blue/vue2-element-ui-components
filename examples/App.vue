<template>
  <div style="padding: 24px;">
    <base-button @click="onClick">点我</base-button>
  </div>
</template>

<script>
export default {
  name: "ExampleApp",
  methods: {
    onClick() {
      this.$message.success("点击成功");
    }
  }
};
</script>
