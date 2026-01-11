<template>
  <div class="cesium-scene" id="cesium-scene">
    <slot></slot>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

defineOptions({
  name: 'CesiumViewer',
})

onMounted(() => {
  // 初始化 Cesium 场景
  const viewer = new Cesium.Viewer('cesium-scene')
  console.log('🚀 ~ viewer:', viewer)
})
</script>

<style scoped>
#cesium-scene {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
