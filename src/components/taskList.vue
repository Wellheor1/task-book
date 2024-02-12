<template>
<div class="sub-root">
  <div class="six-col">
    <div class="col">
      <div class="header-block-agreement">
        <h4 class="header-text">На согласовании</h4>
      </div>
      <draggable v-model="taskAgreements" group="agreement" @start="drag=true" @end="drag=false" item-key="id">
        <template #item="{element}">
          <div class="task">
            <div >
              <p class="task-title">{{element.name}}</p>
              <button class="transparent-button">
                <i class="fa fa-ellipsis-h fa-2xl" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </template>
      </draggable>
    </div>
    <div class="col">
      <div class="header-block-new">
        <h4 class="header-text">Новые</h4>
      </div>
      <div v-for="task in taskNew" :key="task.pk" class="task-list"></div>
    </div>
    <div class="col">
      <div class="header-block-process">
        <h4 class="header-text">В процессе</h4>
      </div>
      <div v-for="task in taskProcess" :key="task.pk" class="task-list"></div>
    </div>
    <div class="col">
      <div class="header-block-done">
        <h4 class="header-text">Готово</h4>
      </div>
      <div v-for="task in taskDone" :key="task.pk" class="task-list"></div>
    </div>
    <div class="col">
      <div class="header-block-fix">
        <h4 class="header-text">Доработать</h4>
      </div>
      <div v-for="task in taskFix" :key="task.pk" class="task-list"></div>
    </div>
  </div>
</div>
</template>
<script setup>
import {ref} from "vue";
import draggable from 'vuedraggable'

const taskAgreements = ref([
  {id: 1, name: '1111'},
  {id: 2, name: '2222'},
  {id: 3, name: '3333'},
  {id: 4, name: '4444'},
  {id: 5, name: '5555'},
  {id: 6, name: '6666'},
]);
const taskNew = ref([]);
const taskProcess = ref([]);
const taskDone = ref([]);
const taskFix = ref([]);

</script>
<style scoped lang="scss">
.sub-root {
  margin: 30px auto;
  width: 920px;
  height: 596px;
  border-radius: 8px;
  border: 1px
}
.six-col {
  display: grid;
  grid-template-columns: repeat(6, minmax(100px, 1fr));
  position: relative;
  height: 100%;
  gap: 10px;
}
.col {
  border: 1px solid #E3E5E8;
  background-color: #E3E5E8;
  border-radius: 8px;
}
.header-block {
  &-agreement,
  &-new,
  &-process,
  &-done,
  &-fix {
    border-radius: 8px 8px 0 0;
    padding: 5px 5px;
  }
  &-agreement {
    background-color: #FF65DD;
  }
  &-new {
    background-color: #33A0FF;
  }
  &-process {
    background-color: #FFC633;
  }
  &-done {
    background-color: #22C33D;
  }
  &-fix {
    background-color: #F53D5C;
  }
}
.header-text {
  margin: 0;
  color: #1C2530;
}
.task-list {
  position: relative;
  height: 596px;
  border: 1px solid #E3E5E8;
  border-radius: 0 0 8px 8px;
  background-color: #E3E5E8;
}
.task {
  display: grid;
  background-color: #FFFFFF;
  border-radius: 4px;
  margin: 5px 5px
}
.task-title {
  margin: 3px;
  color: #1C2530
}
.transparent-button {
  background-color: transparent;
  border: 1px solid black;
}
</style>