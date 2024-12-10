<script lang="ts" setup>
import { Form, FormInstance, FormItem } from 'ant-design-vue';
import { reactive, ref } from 'vue';
import AInput from './antd-components/AInput.vue';

const formRef = ref<FormInstance | null>(null);
const formModel = reactive({
  zh: '',
  en: '',
  PascalCase: '',
  camelCase: '',
  'kebab-case': '',
  snake_case: '',
});
const loading = ref(false);
</script>

<template>
  <Form
    :model="formModel"
    ref="formRef"
    layout="horizontal"
    :labelCol="{ span: 7 }"
    :wrapperCol="{ span: 17 }"
    labelAlign="left"
  >
    <FormItem name="zh" label="Chinese">
      <AInput v-model:value="formModel.zh"></AInput>
    </FormItem>

    <FormItem name="en" label="English">
      <AInput v-model:value="formModel.en" :loading="loading" />
    </FormItem>

    <FormItem name="PascalCase" label="PascalCase">
      <AInput v-model:value="formModel.PascalCase" :loading="loading" />
    </FormItem>

    <FormItem name="camelCase" label="camelCase">
      <AInput v-model:value="formModel.camelCase" :loading="loading" />
    </FormItem>

    <FormItem name="kebab-case" label="kebab-case">
      <AInput v-model:value="formModel['kebab-case']" :loading="loading" />
    </FormItem>

    <FormItem name="snake_case" label="snake_case">
      <AInput v-model:value="formModel.snake_case" :loading="loading" />
    </FormItem>
  </Form>
</template>

<style lang="less" scoped></style>
