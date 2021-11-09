import rollupTypescript from 'rollup-plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';

export default {
    input: 'src/index.ts',
    external(id) {
        return id === 'react';
    },
    output: {
        file: 'lib/index.js',
        format: 'cjs',
        globals: {
            react: 'React'
        }
    },
    plugins: [
        rollupTypescript(),
        image(),
        postcss(),
    ],
};