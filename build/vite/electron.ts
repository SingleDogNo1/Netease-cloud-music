import electron from 'vite-plugin-electron';
import pkg from '../../package.json';

const sourcemap = !!process.env.VSCODE_DEBUG;
const isBuild = process.argv.slice(2).includes('build');
// 自动安装依赖，如果 dependencies 为空，会删除这个选项. 赋默认值为 {}
const dependencies =
  (pkg as unknown as Record<string, Record<string, string>> | null)?.dependencies ?? {};

export function configElectronPlugin() {
  const plugin = electron([
    {
      // Main-Process entry file of the Electron App.
      entry: 'electron/main/index.ts',
      onstart(options) {
        if (process.env.VSCODE_DEBUG) {
          console.log(/* For `.vscode/.debug.script.mjs` */ '[startup] Electron App');
        } else {
          options.startup();
        }
      },
      vite: {
        build: {
          sourcemap,
          minify: isBuild,
          outDir: 'dist-electron/main',
          rollupOptions: {
            external: Object.keys(dependencies),
          },
        },
      },
    },
    {
      entry: 'electron/preload/index.ts',
      onstart(options) {
        // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
        // instead of restarting the entire Electron App.
        options.reload();
      },
      vite: {
        build: {
          sourcemap,
          minify: isBuild,
          outDir: 'dist-electron/preload',
          rollupOptions: {
            external: Object.keys(dependencies),
          },
        },
      },
    },
  ]);
  return plugin;
}
