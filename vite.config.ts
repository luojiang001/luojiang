import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置 base 路径，GitHub Pages 部署时需要替换为实际仓库名
  base: '/仓库名/', // 标注：部署时请将此处替换为实际仓库名，例如 /myinfo/
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  // 配置开发服务器，使其在局域网内可见
  server: {
    host: true // 监听所有网络接口，允许局域网内其他设备访问
  }
})