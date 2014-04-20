define(function(require, exports, module) {
  "use strict";

  var extend = require("lodash/objects/assign");

  /**
   * Represents a LayoutManager.
   * @constructor
   */
  function LayoutManager(options) {
    this.options = options;
  }

  // Attach the current version.
  LayoutManager.VERSION = "1.0.0";

  // Attach the public interface.
  extend(LayoutManager.prototype, {
    // View manipulation.
    getView: require("./manipulation/get-view"),
    getViews: require("./manipulation/get-views"),
    setView: require("./manipulation/set-view"),
    setViews: require("./manipulation/set-views"),
    insertView: require("./manipulation/insert-view"),
    insertViews: require("./manipulation/insert-views"),
    removeView: require("./manipulation/remove-view"),
    removeViews: require("./manipulation/remove-views"),
    //detachView: require("./manipulation/detachview"),
    //detachViews: require("./manipulation/detachviews"),

    // Control flow.
    promise: require("./control-flow/promise"),

    // Rendering.
    render: require("./render/render")
    //renderView: require("./render/render-view"),
    renderViews: require("./render/render-views"),
  });

  module.exports = LayoutManager;
});
