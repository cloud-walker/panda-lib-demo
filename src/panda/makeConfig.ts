import { _makeConfig } from "./_internal";

const styledSystemPath = "./node_modules/panda-lib/styled-system";

export function makeConfig() {
  return _makeConfig({
    outdir: styledSystemPath,
    include: [`${styledSystemPath}/panda.buildinfo.json`],
  });
}
