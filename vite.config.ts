import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import './src/scss/variables';
                    @import './src/scss/mixins';
                `,
            },
        },
    },
});
