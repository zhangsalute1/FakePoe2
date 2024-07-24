<template>
  <div class="container">
    <div class="aside">
      <Aside></Aside>
    </div>
    <div class="mainContent">
      <MainContent></MainContent>
    </div>
  </div>
</template>
<script setup>
import Aside from '@/components/layout/aside.vue';
import MainContent from '@/components/layout/mainContent.vue';
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  .aside {
    width: 300px;
    background-color: #f9f9f9;
  }
  .mainContent {
    flex: 1;
    background-color: #dfd1d1;
  }
}
</style>
