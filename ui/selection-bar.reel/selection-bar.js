/**
 * @module ui/selection-bar.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class SelectionBar
 * @extends Component
 */
exports.SelectionBar = Component.specialize(/** @lends SelectionBar# */ {
    constructor: {
        value: function SelectionBar() {
            this.super();
        }
    },

    content: {
    	value: [
            {"name": "Rock", "icon": "#rock"}, 
            {"name": "Paper", "icon": "#paper"}, 
            {"name": "Scissors", "icon": "#scissors"}, 
            {"name": "Lizard", "icon": "#lizard"}, 
            {"name": "Spock", "icon": "#spock"}
        ]
    },

    selection: {
        set: function(value) {
            if (value) {
                var pick = value.name,
                    random = Math.floor(Math.random() * (4 - 0)) + 0,
                    computer = this.content[random].name,
                    message;

                switch (pick) {

                    case "Rock":
                        if (computer == "Rock") {
                            message = "Rock vs Rock! Tie!";
                        } else if (computer == "Paper") {
                            message = "Paper covers Rock! You Lose!";
                        } else if (computer == "Scissors") {
                            message = "(and as it always has) Rock crushes scissors! You Win!";
                        } else if (computer == "Lizard") {
                            message = "Rock crushes Lizard! You Win!";
                        } else if (computer == "Spock") {
                            message = "Spock vaporizes Rock! You Lose!";
                        } else {
                            message = "There was an error!";
                        }
                        break;

                    case "Paper":
                        if (computer == "Rock") {
                            message = "Paper covers Rock! You Win!";
                        } else if (computer == "Paper") {
                            message = "Paper vs Paper! Tie!";
                        } else if (computer == "Scissors") {
                            message = "Scissors cuts Paper! You Lose!";
                        } else if (computer == "Lizard") {
                            message = "Lizard eats Paper! You Lose!";
                        } else if (computer == "Spock") {
                            message = "Paper disproves Spock! You Win!";
                        } else {
                            message = "There was an error!";
                        }
                        break;

                    case "Scissors":
                        if (computer == "Rock") {
                            message = "(and as it always has) Rock crushes scissors! You Lose!";
                        } else if (computer == "Paper") {
                            message = "Scissors cuts Paper! You Win!";
                        } else if (computer == "Scissors") {
                            message = "Scissors vs Scissors! Tie!";
                        } else if (computer == "Lizard") {
                            message = "Scissors decapitates Lizard! You Win!";
                        } else if (computer == "Spock") {
                            message = "Spock smashes Scissors! You Lose!";
                        } else {
                            message = "There was an error!";
                        }
                        break;

                    case "Lizard":
                        if (computer == "Rock") {
                            message = "Rock crushes Lizard! You Lose!";
                        } else if (computer == "Paper") {
                            message = "Lizard eats Paper! You Win!";
                        } else if (computer == "Scissors") {
                            message = "Scissors decapitates Lizard! You Lose!";
                        } else if (computer == "Lizard") {
                            message = "Lizard vs Lizard! Tie!";
                        } else if (computer == "Spock") {
                            message = "Lizard poisons Spock! You Win!";
                        } else {
                            message = "There was an error!";
                        }
                        break;

                    case "Spock":
                        if (computer == "Rock") {
                            message = "Spock vaporizes Rock! You Win!";
                        } else if (computer == "Paper") {
                            message = "Paper disproves Spock! You Lose!";
                        } else if (computer == "Scissors") {
                            message = "Spock smashes Scissors! You Win!";
                        } else if (computer == "Lizard") {
                            message = "Lizard poisons Spock! You Lose!";
                        } else if (computer == "Spock") {
                            message = "Spock vs Spock! Tie!";
                        } else {
                            message = "There was an error!";
                        }
                        break;
                }
                this.message = message;
                this.computer = computer;
                
                console.log(this.templateObjects.repetition.selection);
                var selectionObj = this.templateObjects.repetition.selection;
                selectionObj.addEventListener("click", this._resetSelection(selectionObj));

               
            }
        }
    },

    _resetSelection: {
        value: function (selection) {
            this.templateObjects.repetition.selection.clear();
            this.templateObjects.repetition.selection = selection;
        }
    }


});
