<script setup lang="ts">
import TestForm from './components/TestForm.vue';
</script>

<template>
  <div class="page-wrapper">
    <div class="form-wrapper">
      <TestForm />
    </div>
  </div>
</template>

<style scoped lang="less">
.page-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .form-wrapper {
    width: 300px;
    box-sizing: border-box;
  }
}
</style>
