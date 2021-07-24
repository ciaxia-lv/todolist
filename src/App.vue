<template>
  <div id="root">
    <div>
      <h2 class="e"><router-link to="/Myecharts">跳转到echarts</router-link></h2>
      <h2 class='t'><router-link to="/Mytodolist">跳转到todolist</router-link></h2>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>

</style>