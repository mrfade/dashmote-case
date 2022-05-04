import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver({
        importStyle: 'less',
      })],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'body-background': '#F2F6FC',
          'font-family': '"Roboto", sans-serif',
          'text-color': '#223273',
          'text-color-dark': '#223273',
          'heading-color': '#223273',
          'menu-bg': 'transparent',
          'menu-horizontal-line-height': '62px',
          'layout-header-background': '#F2F6FC',
          'layout-body-background': '#F2F6FC',
        },
        javascriptEnabled: true,
      },
    },
  },
})
