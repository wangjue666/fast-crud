import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import visualizer from "rollup-plugin-visualizer";
const { resolve } = path;
// https://vitejs.dev/config/
export default {
  plugins: [vueJsx(), vue()],
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment"
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "fast-crud-extends"
    },
    // cssCodeSplit: true,
    sourcemap: true,
    // minify: false,
    rollupOptions: {
      plugins: [visualizer()],
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "vue",
        "lodash-es",
        "dayjs",
        "vue-i18n",
        "vuedraggable",
        "ali-oss",
        "cos-js-sdk-v5",
        "qiniu-js",
        "@fast-crud/fast-crud"
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
          "lodash-es": "_",
          dayjs: "dayjs",
          "vue-i18n": "VueI18n",
          vuedraggable: "vuedraggable",
          "@fast-crud/fast-crud": "FastCrud",
          "ali-oss": "OSS",
          "cos-js-sdk-v5": "COS",
          "qiniu-js": "qiniu"
        }
      }
    }
  }
};
