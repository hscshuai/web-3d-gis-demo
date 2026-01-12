<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/cesium">Cesium</RouterLink>
        <RouterLink to="/supermap3d">SuperMap3D</RouterLink>
      </nav>
    </div>
  </header>
  <div class="body">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
