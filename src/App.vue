<template>
  <navigation-menu></navigation-menu>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavigationMenu from '@/components/NavigationMenu/index.vue'
</script>
