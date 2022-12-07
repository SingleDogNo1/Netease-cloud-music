import electronRenderer from 'vite-plugin-electron-renderer';

export function configElectronRendererPlugin() {
  const plugin = electronRenderer({ nodeIntegration: true });
  return plugin;
}
