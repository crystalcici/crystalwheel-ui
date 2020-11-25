<template>
   <div>
    <div class="topnav">
      <div class="logo">LOGO</div>
      <div class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </div>
    </div>
    <div class="banner">
      <h1>crystalUI</h1>
      <h2>一个基于TS+Vue3的轮子学习</h2>
      <p class="actions">
        <a>Github</a>
        <a>开始</a>
      </p>
    </div>
   </div>
</template>
<style lang="scss" scoped>
  .topnav{
    background: pink;
    display: flex;
    padding: 16px;
    > .logo {
      max-width: 6em;
      margin-right: auto;
    }
    > .menu {
      display: flex;
      white-space: nowrap;
      > li {
        margin: 0 1em;
      }
    }
  }
</style>