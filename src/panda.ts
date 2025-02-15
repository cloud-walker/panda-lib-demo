import {type Config, defineConfig} from '@pandacss/dev'

export function makeConfig(props: Config) {
  return defineConfig({
    strictTokens: true,
    strictPropertyValues: true,
    preflight: true,
    clean: true,
    outdir: './node_modules/panda-lib/styled-system',
    include: [...(props.include ?? []), 'panda-lib'],
    importMap: 'panda-lib',
    outExtension: 'js',
    theme: {
      extend: {
        tokens: {
          colors: {
            cool: {
              value: '#bada55',
            },
          },
        },
      },
    },
    ...props,
  })
}
