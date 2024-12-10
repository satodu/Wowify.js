import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/wowify.js',
    output: [
        {
            file: 'dist/wowify.cjs.js',
            format: 'cjs', // CommonJS
        },
        {
            file: 'dist/wowify.esm.js',
            format: 'esm', // ESModules
        },
        {
            file: 'dist/wowify.min.js',
            format: 'iife', // Browser-friendly
            name: 'Wowify',
            plugins: [terser()], // Minify the output
        },
    ],
    plugins: [resolve(), commonjs()],
};
