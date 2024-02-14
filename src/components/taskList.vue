<template>
<div class="sub-root">
  <div class="five-col">
    <task-col
        v-for="(group, idx) in tasksGroups"
        :key="idx"
        :tasks="group"
        :row-idx="idx"
        @add="add"
    />
  </div>
</div>
</template>
<script setup>
import { reactive } from "vue";
import TaskCol from "./taskCol.vue";

const tasksGroups = reactive([
    { title: 'На согласование', status: 0, items: [
        {id: 1, name: '1111'},
        {id: 2, name: '2222'},
        {id: 3, name: '3333'},
        {id: 4, name: '4444'},
        {id: 5, name: '5555'},
        {id: 6, name: '6666'},
        {id: 7, name: '7777'},
        {id: 8, name: '8888'},
        {id: 9, name: '9999'},
        {id: 10, name: '10 1111'},
        {id: 11, name: '11 11111'},
        {id: 12, name: '12 11111'},
        {id: 13, name: '13  1111'},
        {id: 14, name: '14  333 '},
        {id: 15, name: '14  34343 '},
      ]
    },
  { title: 'Новые', status: 1, items: [
      {id: 11, name: 'Задача авыа'},
      {id: 33, name: 'Задача нов'},
      {id: 44, name: 'нов зад'},
    ]
  },
  { title: 'В процессе', status: 2, items: [
      {id: 1, name: 'Задача в процесс 2'},
      {id: 2, name: 'Задача в процесс 30303'},
      {id: 3, name: 'ывавыавыа'},
    ]
  },
  { title: 'Готовые', status: 3, items: [
      {id: 1, name: 'Законченная'},
      {id: 2, name: 'Законченная 333'},
      {id: 3, name: 'Убитая 222'},
    ],
  },
  { title: 'Доработка', status: 4, items: [
      {id: 1, name: 'доработка 3'},
      {id: 2, name: 'Доработа выавыавы'},
    ]
  },
])

const add = ({ titleTask, rowIdx }) => {
  tasksGroups[rowIdx].items.push({ id: tasksGroups[rowIdx].items.length + 1, name: titleTask})
}

</script>
<style scoped lang="scss">
.sub-root {
  margin: 30px auto;
  width: 920px;
  height: 596px;
  border-radius: 8px;
  border: 1px
}
.five-col {
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  position: relative;
  height: 100%;
  gap: 10px;
}
</style>