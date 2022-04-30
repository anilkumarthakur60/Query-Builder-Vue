const mix = require('laravel-mix');

/* Laravel Mix Alias (allows to use vue-cli style paths in components `@/` */
require('laravel-mix-alias');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .alias({
    '@': '/resources/js',
    '@s': '/resources/sass',
    '@b': '/resources/js/backend',
    '@f': '/resources/js/frontend',
  })
  .js('resources/js/backend/app.js', 'public/js/backend')
  .sass('resources/sass/backend/app.scss', 'public/css/backend/app.css')
  .js('resources/js/frontend/app.js', 'public/js/frontend')
  .sass('resources/sass/frontend/app.scss', 'public/css/frontend/app.css')
  .styles([
    'node_modules/@mdi/font/css/materialdesignicons.min.css',
  ], 'public/css/vendor.css')
  .copyDirectory('node_modules/@mdi/font/fonts', 'public/fonts')
  // .extract(['vue','buefy'])
  .copyDirectory('resources/images', 'public/images')
  .version();