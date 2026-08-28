define(function(require, exports, module) {
  const ace = require("ace");
  const baseLanguage = require("ext/language/base_handler");
  const oop = require("ace/lib/oop");
  const Range = require("ace/range").Range;

  const PymMode = function() {
    this.$id = "ace/mode/pym";
  };

  oop.inherits(PymMode, baseLanguage.baseHandler);

  (function() {
    this.createWorker = function() {
      return null;
    };

    this.$autoCloseTags = true;

    this.autoOutdent = function(state, line, indent) {
      return 0;
    };

    this.checkOutdent = function(state, line, input) {
      return false;
    };

    this.getNextLineIndent = function(state, line, indent) {
      return "";
    };

  }).call(PymMode.prototype);

  module.exports = PymMode;
});