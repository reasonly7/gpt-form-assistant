<script lang="ts" setup>
import { Form, FormInstance, FormItem } from 'ant-design-vue';
import { reactive, ref } from 'vue';
import AInput from './antd-components/AInput.vue';
import { gptApi } from '@/api/gptApi';

type FormModelKey =
  | 'zh'
  | 'en'
  | 'PascalCase'
  | 'camelCase'
  | 'kebab-case'
  | 'snake_case';
type FormModelType = Record<FormModelKey, string>;

const flag = ref(false);
const formRef = ref<FormInstance | null>(null);
const formModel = reactive<FormModelType>({
  zh: '',
  en: '',
  PascalCase: '',
  camelCase: '',
  'kebab-case': '',
  snake_case: '',
});
const loading = ref(false);

const blurHandler = async () => {
  formModel.zh = formModel.zh.trim();
  if (!formModel.zh) {
    return;
  }
  if (flag.value) {
    return;
  }

  loading.value = true;
  const res = await gptApi.bailianGPT(formModel.zh);
  if (!res) {
    loading.value = false;
    return;
  }
  const rawJson = res.match(/\s*[\{\[][\s\S]*[\}\]]\s*/);
  if (!rawJson) {
    loading.value = false;
    return;
  }
  try {
    const obj: FormModelType = JSON.parse(rawJson.toString());
    Object.keys(formModel).forEach((key) => {
      const typeKey = key as FormModelKey;
      formModel[typeKey] = formModel[typeKey] || obj[typeKey] || '';
    });
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <Form
    :model="formModel"
    ref="formRef"
    layout="horizontal"
    :labelCol="{ span: 9 }"
    :wrapperCol="{ span: 15 }"
    labelAlign="left"
  >
    <FormItem name="zh" label="Chinese" required>
      <AInput
        v-model:value="formModel.zh"
        autofocus
        @blur="blurHandler"
        :disabled="loading"
      ></AInput>
    </FormItem>

    <FormItem name="en" label="English" required>
      <AInput
        v-model:value="formModel.en"
        :loading="loading"
        :disabled="loading"
      />
    </FormItem>

    <FormItem name="PascalCase" label="PascalCase" required>
      <AInput
        v-model:value="formModel.PascalCase"
        :loading="loading"
        :disabled="loading"
      />
    </FormItem>

    <FormItem name="camelCase" label="camelCase" required>
      <AInput
        v-model:value="formModel.camelCase"
        :loading="loading"
        :disabled="loading"
      />
    </FormItem>

    <FormItem name="kebab-case" label="kebab-case" required>
      <AInput
        v-model:value="formModel['kebab-case']"
        :loading="loading"
        :disabled="loading"
      />
    </FormItem>

    <FormItem name="snake_case" label="snake_case" required>
      <AInput
        v-model:value="formModel.snake_case"
        :loading="loading"
        :disabled="loading"
      />
    </FormItem>
  </Form>
</template>

<style lang="less" scoped></style>
