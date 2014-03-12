define([], function() {
  "use strict";

  /**
   * Represents a Cache.
   * @constructor
   */
  function Cache() {
    this._cache = {};
  }

  Cache.prototype.get = function(name) {
    return this._cache[name];
  };

  Cache.prototype.set = function(name, value) {
    this._cache[name] = value;
  };

  Cache.prototype.unset = function(name) {
    delete this._cache[name];
  };

  return Cache;
});
