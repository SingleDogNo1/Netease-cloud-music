import unocss from '@unocss/vite';
// import transformerDirective from '@unocss/transformer-directives';

export function configUnocssPlugin() {
  const plugin = unocss();

  return plugin;
}
