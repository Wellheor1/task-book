<template>
  <div class="root">
    <task-list></task-list>
  </div>
</template>
<script setup>

import TaskList from "../components/taskList.vue";
</script>

<style scoped>
.root {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #FFF;
}
</style>