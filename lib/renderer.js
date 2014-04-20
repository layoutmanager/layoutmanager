define(function(require, exports, module) {
  "use strict";

  /**
   * Represents a Renderer.
   * @constructor
   */
  function Renderer() {

  }

  // This function is responsible for pairing the rendered template into the
  // DOM element.
  Renderer.prototype.applyTemplate = function(rendered, manager, def) {
    // Actually put the rendered contents into the element.
    if (_.isString(rendered)) {
      // If no container is specified, we must replace the content.
      if (manager.noel) {
        rendered = $.parseHTML(rendered, true);

        // Remove extra root elements.
        this.$el.slice(1).remove();

        // Swap out the View on the first top level element to avoid
        // duplication.
        this.$el.replaceWith(rendered);

        // Don't delegate events here - we'll do that in resolve()
        this.setElement(rendered, false);
      } else {
        this.html(this.$el, rendered);
      }
    }

    // Resolve only after fetch and render have succeeded.
    def.resolveWith(this, [this]);
  };

  Cache.prototype.unset = function(name) {
    delete this._cache[name];
  };

  module.exports = Cache;
});
