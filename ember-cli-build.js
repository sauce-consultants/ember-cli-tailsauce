'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const autoprefixer = require('autoprefixer');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {

    // Workaround for https://github.com/ember-cli/ember-cli/issues/8075
    'ember-cli-uglify': {
      uglify: {
        compress: {
          collapse_vars: false
        }
      }
    },
    // Tailwind CSS Biz
    postcssOptions: {
      compile: {
        enabled: false
      },
      filter: {
        enabled: true,
        plugins: [
          require("tailwindcss")("app/styles/tailwind.js"),
          {
            module: autoprefixer,
            options: {
              browsers: ['last 2 versions'] // this will override the config, but just for this plugin
            }
          }
        ]
      }
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};