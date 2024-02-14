<template>
  <div class="col">
    <div :class="`header-block-${props.tasks.status}`">
      <h4 class="header-text">{{ props.tasks.title }}</h4>
    </div>
    <draggable v-model="props.tasks.items" :group="{ name: `${props.tasks.status}`, pull: true, put: true }"
                 @change="showAllert" item-key="id" class="max-height">
      <template #item="{element}">
        <div class="task">
          <div class="task-row">
            <p class="task-title">{{element.name}}</p>
            <button class="transparent-button">
              <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </template>
      <template #footer>
        <div v-if="!showAddTask">
          <button class="transparent-button-add" @click="showAddTask = true">
            <i class="fa fa-plus"></i> Добавить
          </button>
        </div>
        <add-task v-else @close="showAddTask = false" @addItem="addItem" />
      </template>
    </draggable>
  </div>
</template>

<script setup>
import { ref } from "vue";
import draggable from 'vuedraggable'
import AddTask from "./addTask.vue";

const props = defineProps({
  tasks: {
    type: Object,
    required: true,
  },
  rowIdx: {
    type: Number,
    required: true,
  }
})
const emit = defineEmits(['add'])

const showAllert = ({added}) => {
  if (added) {
    alert(`Задача перемещена в ${props.tasks.title}`)
  }
}

const showAddTask = ref(false);

const addItem = ({ titleTask }) => {
  // Да, это стоило делать через store либо убрать компонент addTask )
  emit('add', {titleTask, rowIdx: props.rowIdx})
}

</script>
<style scoped lang="scss">
.col {
  border: 1px solid #E3E5E8;
  background-color: #E3E5E8;
  border-radius: 8px;
}
.header-block {
  &-0,
  &-1,
  &-2,
  &-3,
  &-4 {
    border-radius: 8px 8px 0 0;
    padding: 5px 5px;
  }
  &-0 {
    background-color: #FF65DD;
  }
  &-1 {
    background-color: #33A0FF;
  }
  &-2 {
    background-color: #FFC633;
  }
  &-3 {
    background-color: #22C33D;
  }
  &-4 {
    background-color: #F53D5C;
  }
}
.header-text {
  margin: 0;
  color: #1C2530;
  text-align: center;
}
.task-list {
  position: relative;
  height: 596px;
  border: 1px solid #E3E5E8;
  border-radius: 0 0 8px 8px;
  background-color: #E3E5E8;
}
.task {
  background-color: #FFFFFF;
  border: 1px solid #C4CAD4;
  border-radius: 4px;
  margin: 5px 5px;
}
.task:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  z-index: 1;
  transform: scale(1.008);
}
.task-row {
  display: flex;
  padding: 8px 0 8px 8px;
}
.task-title {
  flex-grow: 1;
  margin: 3px;
  color: #1C2530;
  word-break: break-all;
}
.transparent-button {
  background-color: transparent;
  align-self: start;
  flex: 0;
  color: #434A54;
  border: none;
  border-radius: 4px;
  padding: 3px 2px;
  margin: 0 1px;
}
.transparent-button:hover {
  background-color: #434a54;
  color: #FFFFFF;
}
.transparent-button:active {
  background-color: #37BC9B;
  color: #FFFFFF;
}
.transparent-button-add {
  background-color: transparent;
  align-self: start;
  flex: 0;
  color: #3D86F4;
  border: none;
  border-radius: 4px;
  padding: 3px 2px;
  margin: 0 5px
}
.transparent-button-add:hover {
  background-color: #434a54;
  color: #FFFFFF;
}
.transparent-button-add:active {
  background-color: #37BC9B;
  color: #FFFFFF;
}
.max-height {
  height: 568px;
  overflow: auto;
}
</style>