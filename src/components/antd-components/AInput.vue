<script lang="ts" setup>
import { LoadingOutlined } from '@ant-design/icons-vue';
import { Input, Spin } from 'ant-design-vue';
import { h } from 'vue';

defineProps<{
  loading?: boolean;
}>();

const indicator = h(LoadingOutlined, {
  style: { fontSize: '14px' },
  spin: true,
});
</script>

<template>
  <Input>
    <template #suffix v-if="loading">
      <Spin spinning size="small" :indicator="indicator"></Spin>
    </template>
  </Input>
</template>

<style lang="less" scoped></style>
