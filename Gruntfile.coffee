module.exports = ->
  @loadTasks "build/tasks"

  @registerTask "default", [
    "clean"
    "jshint"
    "requirejs"
    "test"
  ]
