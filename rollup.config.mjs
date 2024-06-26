import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts', // 라이브러리의 진입점
  output: [
    {
      file: 'dist/bundle.esm.js', // ESM 형태로 빌드 결과
      format: 'es'
    },
    {
      file: 'dist/bundle.umd.js', // UMD 형태로 빌드 결과
      format: 'umd',
      name: 'NexusUI',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    },
    {
      file: 'dist/bundle.iife.js', // IIFE 형태로 빌드 결과
      format: 'iife',
      name: 'NexusUI'
    }
  ],
  plugins: [PeerDepsExternalPlugin(), resolve(), commonjs(), typescript(), terser()] // 플러그인 설정
};
