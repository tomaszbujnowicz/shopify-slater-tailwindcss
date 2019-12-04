const mix = require('laravel-mix');
const purgecss = require('laravel-mix-purgecss');

mix
  .postCss('./src/index.css', '../src/assets/index.css', [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),   
    require('postcss-nested'),
    require('postcss-preset-env')
  ])

if (mix.inProduction()) {
  mix
    .purgeCss({
      folders: [
        '../src/layout',
        '../src/scripts',
        '../src/sections',
        '../src/snippets',
        '../src/templates',
      ],
      extensions: ['js', 'liquid'],
    })
    .options({
      cssNano: {
        // discardComments: {removeAll: true},
      }
    });
}