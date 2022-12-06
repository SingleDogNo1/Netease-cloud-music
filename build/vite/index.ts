import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { configUnocssPlugin } from './unocss';
import { configElectronRendererPlugin } from './electronRenderer';
import { configElectronPlugin } from './electron';

export function createVitePlugins() {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    vue(),
    // have to
    vueJsx(),
  ];

  // vite-plugin-electron-renderer: Use Node.js API in the Renderer-process
  vitePlugins.push(configElectronRendererPlugin());

  // unocss
  vitePlugins.push(configUnocssPlugin());

  //vite-plugin-electron
  vitePlugins.push(configElectronPlugin());

  return vitePlugins;
}
