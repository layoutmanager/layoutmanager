define(["./public"], function(PublicInterface) {
  "use strict";

  /**
   * Represents a LayoutManager.
   * @constructor
   */
  function LayoutManager(options) {
    this.options = options;
  }

  LayoutManager.VERSION = "1.0.0";


  LayoutManager.prototype = PublicInterface;

  return LayoutManager;
});
