/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    handleResetButtonAction: {
        value: function () {
            this.winCount = 0;
            this.totalCount = 0;
            this.winPercent = 0;
        }
    }



});
