<template>
  <div class="chat-container">
    <div class="messages">
      <div v-for="(item, index) in items" :key="index" class="message">{{ item }}</div>
    </div>
    <div class="inputArea">
      <input v-model="newMessage" @keyup.enter="submitMessage" placeholder="请输入..." />
      <button @click="submitMessage">发送</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([]);

// 新消息
const newMessage = ref('');

//发送
const submitMessage = () => {
  if (newMessage.value.trim()) {
    items.value.push(newMessage.value);
    newMessage.value = '';
  }
};
</script>

<style scoped lang="scss">
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: antiquewhite;
  border-left: 1px solid;
  border-right: 1px solid;
  .messages {
    flex-grow: 1;
    overflow-y: auto;
    .message {
      margin: 5px;
      padding: 10px;
      background: #e3e3e3;
      border-radius: 5px;
    }
  }
  .inputArea {
    display: flex;
    input {
      flex-grow: 1;
      padding: 10px;
      margin-right: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    button {
      padding: 10px 20px;
      cursor: pointer;
      background-color: #007bff;
      border: none;
      color: white;
      border-radius: 5px;
    }
  }
}
</style>
