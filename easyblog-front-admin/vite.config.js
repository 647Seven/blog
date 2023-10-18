import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    hmr:true,
    port:3001,//接口
    
    proxy:{
      '/api':{
        target:"http://localhost:8081/",//目标代理接口器
        secure:false,
        changeOrigin:true,//开启代理，在本地创建一个虚拟服务端
        pathReWrite:{
          '^/api':'/api',
        },
      },
    },
  },
  resolve:{
    //配置路径别名
    alias:{
      '@':path.resolve(__dirname,'./src'),
    },
  },
})
