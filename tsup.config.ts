import {defineConfig} from 'tsup'

export default defineConfig({
  entry: {
    panda: 'src/panda.ts',
    components: 'src/components/main.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
})
