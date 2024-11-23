import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import styles from "rollup-plugin-styler";
import image from "@rollup/plugin-image";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

export default {
  input: "index.js",
  output: {
    file: "./dist/bundle.js",
    format: "cjs",
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: "bundled" }),
    styles(),
    image(),
    serve({ port: 5505 }),
    livereload(),
  ],
};
