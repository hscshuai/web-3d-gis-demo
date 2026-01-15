import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  // 服务器配置
  server: {
    // 端口
    port: 7000,
    // 主机地址
    host: '0.0.0.0',
    // 自动打开浏览器
    open: false,
    // 启用CORS
    cors: true,
    // HTTPS配置
    https: false,
    // 代理配置
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:4000',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
    // 中间件模式
    // middlewareMode: false,
    // 静态文件服务
    // static: {
    //   dir: 'public',
    //   options: {},
    // },
  },
  build: {
    outDir: 'Web3DGisDemo',
    assetsDir: 'assets',
    sourcemap: true,
    // 告诉 Vite：这些库是全局的，不进行分析
    rollupOptions: {
      external: ['/lib/Cesium/Cesium.js', '/lib/SuperMap3D/SuperMap3D.js'],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
