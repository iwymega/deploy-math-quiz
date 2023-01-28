import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base: '/deploy-math-quiz',
    plugins: [vue()]
})