import {type Config, defineConfig, definePreset} from '@pandacss/dev'

export function makeConfig(props: Config) {
  return defineConfig({
    strictTokens: true,
    strictPropertyValues: true,
    preflight: true,
    outdir: './node_modules/panda-lib/styled-system',
    validation: 'error',
    importMap: 'panda-lib',
    outExtension: 'js',
    globalCss: {
      ':root': {
        backgroundColor: '#222',
        color: 'white',
      },
    },
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
    include: [...(props.include ?? []), './styled-system/panda.buildinfo.json'],
  })
}
