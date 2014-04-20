require.config({
  packages: [{
    name: "layoutmanager",
    location: ".",
    main: "index.js"
  }, {
    name: "lodash",
    location: "../bower_components/lodash-amd",
    main: "modern/main.js"
  }],

  paths: {
    sizzle: "../bower_components/sizzle/dist/sizzle",
    lodash: "../bower_components/lodash/dist/lodash",
    layoutmanager: "../bower_components/layoutmanager/backbone.layoutmanager"
  },

  baseUrl: "../lib"
});
