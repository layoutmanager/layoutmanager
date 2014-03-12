module.exports = ->

  @config "requirejs",
    options:
      mainConfigFile: "build/config.js"
      findNestedDependencies: true
      logLevel: 2
      skipModuleInsertion: false
      useStrict: true

      wrap:
        startFile: "build/start.js"
        endFile: "build/end.js"

    amd:
      options:
        targetFolder: "dist/"
        optimize: "none"
        out: "dist/webapp.js"

    bundled:
      options:
        optimize: "none"
        out: "dist/webapp.bundled.js"
        exclude: []

  @loadNpmTasks "grunt-contrib-requirejs"
