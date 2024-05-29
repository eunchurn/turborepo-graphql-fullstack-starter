import { dynamicImport } from "tsimportlib";

// new Function("del", "return import(del");

async function runDelete() {
  const del = (await dynamicImport("del", module)) as typeof import("del");
  const path = "types/crud/**/index.ts";
  del
    .deleteAsync([path])
    .then((files) =>
      console.log(`✔ ${files.length} generated 'index.ts' files deleted`)
    );
}

runDelete();
