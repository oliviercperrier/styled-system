import typescript from "@rollup/plugin-typescript";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import json from "rollup-plugin-json";
import replace from "@rollup/plugin-replace";
import pkg from "./package.json" assert { type: "json" };

const cjs = {
  exports: "named",
  interop: "auto",
  format: "cjs",
  sourcemap: true,
};

const esm = {
  format: "esm",
  interop: "auto",
  sourcemap: true,
};

const getCJS = (override) => ({ ...cjs, ...override });
const getESM = (override) => ({ ...esm, ...override });

const commonPlugins = [
  typescript({
    // The build breaks if the tests are included by the typescript plugin.
    // Since un-excluding them in tsconfig.json, we must explicitly exclude them
    // here.
    exclude: ["**/*.test.ts", "**/*.test.tsx", "dist"],
    outputToFilesystem: true,
    tsconfig: "./tsconfig.json",
  }),
  json(),
  nodeResolve(),
  commonjs({
    esmExternals: false,
    ignoreGlobal: true,
  }),
  replace({
    __VERSION__: JSON.stringify(pkg.version),
    preventAssignment: true,
  }),
  /** @type {import('rollup').Plugin} */
  ({
    name: "postprocessing",
    // Rollup 2 injects globalThis, which is nice, but doesn't really make sense for Microbundle.
    // Only ESM environments necessitate globalThis, and UMD bundles can't be properly loaded as ESM.
    // So we remove the globalThis check, replacing it with `this||self` to match Rollup 1's output:
    renderChunk(code, chunk, opts) {
      if (opts.format === "umd") {
        // minified:
        code = code.replace(
          /([a-zA-Z$_]+)="undefined"!=typeof globalThis\?globalThis:(\1\|\|self)/,
          "$2"
        );
        // unminified:
        code = code.replace(
          /(global *= *)typeof +globalThis *!== *['"]undefined['"] *\? *globalThis *: *(global *\|\| *self)/,
          "$1$2"
        );
        return { code, map: null };
      }
    },
  }),
];

const configBase = {
  input: "./src/index.ts",

  // \0 is rollup convention for generated in memory modules
  external: (id) =>
    !id.startsWith("\0") && !id.startsWith(".") && !id.startsWith("/"),
  plugins: commonPlugins,
};

const browserConfig = {
  ...configBase,
  output: [
    getESM({ file: "dist/styled-system.browser.esm.js" }),
    getCJS({ file: "dist/styled-system.browser.cjs.js" }),
  ],
  plugins: configBase.plugins.concat(
    replace({
      __SERVER__: JSON.stringify(false),
      preventAssignment: true,
    })
  ),
};

const nativeConfig = {
  ...configBase,
  output: [
    getCJS({
      file: "native/dist/styled-system.native.cjs.js",
    }),
    getESM({
      file: "native/dist/styled-system.native.esm.js",
    }),
  ],
};

export default [nativeConfig, browserConfig];
