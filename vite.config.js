import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.vue', '.json'],
  },
  server: {
    proxy: {
      '/api': {
        //代理之后的请求地址
        target: 'https://api.imooc-front.lgdsunday.club',
        //跨域配置
        changeOrigin: true
      }
    }
  }
})
