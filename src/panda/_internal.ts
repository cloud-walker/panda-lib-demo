import { type Config, defineConfig } from "@pandacss/dev";

export function _makeConfig(props: Config) {
  return defineConfig({
    strictTokens: true,
    strictPropertyValues: true,
    preflight: true,
    validation: "error",
    importMap: "panda-lib",
    outExtension: "js",
    patterns: {},
    globalCss: {
      ":root": {
        backgroundColor: "#222",
        color: "white",
      },
    },
    theme: {
      extend: {
        tokens: {
          colors: {
            cool: {
              value: "#bada55",
            },
          },
        },
      },
    },
    ...props,
  });
}
