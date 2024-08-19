import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "index.ts",
    output: [
      {
        dir: "dist/",
        format: "cjs",
        sourcemap: true,
      },
      {
        dir: "dist/",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(["tsx"]),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
      }),
    ],
    external: ["react", "react-dom", "next", "tailwind-merge"],
  },
  {
    input: "index.ts",
    output: [{ file: "dist/index.d.ts" }],
    plugins: [dts.default()],
  },
];
