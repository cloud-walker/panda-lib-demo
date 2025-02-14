import {type Config, defineConfig} from '@pandacss/dev'

export function makeConfig(props: Config) {
  return defineConfig({...props})
}
