import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), eslintPlugin(), vueDevTools()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
