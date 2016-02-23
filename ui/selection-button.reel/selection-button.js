/**
 * @module ui/selection-button.reel
 */
var Component = require("montage/ui/component").Component;
// var AbstractButton = require("montage/ui/base/abstract-button").AbstractButton;

/**
 * @class SelectionButton
 * @extends Component
 */
// exports.SelectionButton = AbstractButton.specialize(/** @lends SelectionButton# */ {
exports.SelectionButton = Component.specialize(/** @lends SelectionButton# */ {
    iconAttribute: {
    	set: function (value) {
    		this._SVGUseElement.setAttributeNS('http://www.w3.org/1999/xlink','href', value);
    	}
    }
});
