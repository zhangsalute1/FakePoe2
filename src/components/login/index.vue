<template>
  <div class="login-container">
    <form @submit.prevent="handleSubmit">
      <h2>登录</h2>
      <div class="form-group">
        <label for="username">账号：</label>
        <input v-model="username" type="text" id="username" required />
      </div>
      <div class="form-group">
        <label for="password">密码：</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { loginApi } from '@/api/loginApi.js';
const username = ref('');
const password = ref('');

const handleSubmit = async () => {
  console.log('账号:', username.value);
  console.log('密码:', password.value);
  try {
    const responce = await loginApi({ username: username.value, password: password.value });
    console.log(responce, responce);
  } catch (error) {
    console.error('登录失败:', error);
  }
};
</script>

<style scoped lang="scss">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    margin-bottom: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;

    label {
      margin-bottom: 0.5rem;
    }

    input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }

  button {
    width: 100%;
    padding: 0.75rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #0056b3;
    }
  }
}
</style>
