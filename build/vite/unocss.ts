import unocss from 'unocss/vite';
import transformerDirective from '@unocss/transformer-directives';

export function configUnocssPlugin() {
  const plugin = unocss({
    theme: {
      breakpoints: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1600px',
      },
    },
    transformers: [transformerDirective()],
    rules: [
      [
        'overflow-ellipsis',
        {
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          'white-space': 'nowrap',
        },
      ],
    ],
  });

  return plugin;
}
