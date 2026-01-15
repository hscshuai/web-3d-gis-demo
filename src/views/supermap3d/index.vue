<template>
  <div class="supermap3d-scene" id="supermap3d-scene">
    <slot></slot>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

defineOptions({
  name: 'SuperMap3DViewer',
})

onMounted(() => {
  // 创建三维视图器实例
  // https://ask.supermap.com/161171
  console.log('🚀 ~ CESIUM_WORKERS:', CESIUM_WORKERS)
  window.CESIUM_WORKERS = undefined
  const viewer = new SuperMap3D.Viewer('supermap3d-scene')
  console.log('🚀 ~ viewer:', viewer)
  // 等待场景加载完成后初始化
  // viewer.scenePromise.then(function () {
  //   window.CESIUM_WORKERS = CESIUM_WORKERS
  // })
})
</script>

<style scoped>
#supermap3d-scene {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
