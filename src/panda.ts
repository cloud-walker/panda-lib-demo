import {type Config, defineConfig} from '@pandacss/dev'

export function makeConfig(props: Config) {
  return defineConfig({
    strictTokens: true,
    strictPropertyValues: true,
    preflight: true,
    outdir: './node_modules/panda-lib/styled-system',

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
    include: [
      ...(props.include ?? []),
      './node_modules/panda-lib/src/components/**/*.{ts,tsx}',
    ],
  })
}
