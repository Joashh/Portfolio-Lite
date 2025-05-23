import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [tailwindcss(),
        laravel([
            'resources/js/app.jsx',
        ]),
        react(),
    ],
    
});
