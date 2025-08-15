<script setup>

</script>

<template>
<div id="app">
    <!-- 导航首部 -->
    <header>
      <nav class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link>
      </nav>
    </header>
    <!-- 主体内容 -->
    <main>
      <router-view />
    </main>
    <!-- 站点尾部 -->
    <footer>
      &copy; 2025 QIANCHENSTAR
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* 导航样式 */
.nav {
  background-color: #35495e;
  padding: 12px 20px;
}
.nav a {
  color: #ffffff;
  text-decoration: none;
  margin: 0 15px;
}
.nav a:hover {
  text-decoration: underline;
}
</style>
