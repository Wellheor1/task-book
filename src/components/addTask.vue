<template>
  <div class="add-root">
    <Textarea v-model="titleTask" autoResize rows="3" cols="30" ref="textarea" class="add-input" placeholder="Введите название задачи" />
    <div class="buttons">
      <button class="transparent-button times" @click="emit('close')">
        <i class="fa fa-times"></i>
      </button>
      <button class="transparent-button check" @click="addItem">
        <i class="fa fa-check"></i>
      </button>
  </div>
</div>
</template>

<script setup>
import {ref, onMounted } from 'vue'
import Textarea from "primevue/textarea";

const emit = defineEmits(['close', 'addItem'])


const titleTask = ref('')
const textarea = ref(null);
const addItem = () => {
  console.log('отработа ло1')
  if (titleTask.value) {
    emit('addItem', { titleTask: titleTask.value })
    titleTask.value = ''
  }
  console.log('отработа ло2')
}

onMounted(() => {
  textarea.value.$el.focus()
})

</script>
<style scoped>
.add-root {
  display: flex;
  margin: 5px 5px 0 5px;
  border: 1px solid #3D86F4
}
.add-input {
  flex: 1;
  width: 100%;
  border: 0 !important;
  white-space: normal;
}
.add-input:active {
  outline: none;
}
.add-input:focus {
  outline: none;
  border: 0 !important;
}
.transparent-button {
  background-color: transparent;
  align-self: start;
  color: #434A54;
  border: none;
  border-radius: 4px;
}
.transparent-button:hover {
  background-color: #434a54;
  color: #FFFFFF !important;
}
.transparent-button:active {
  background-color: #37BC9B;
  color: #FFFFFF !important;
}
.buttons {
  background-color: #FFF;
  flex: 0
}
.times {
  color: red;
}
.check {
  color: #22C33D;
}
</style>