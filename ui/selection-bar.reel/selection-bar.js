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

    winCount: {
        value: 0
    },

    totalCount: {
        value: 0
    },

    winPercent: {
        value: 0
    },

    handleSelectionButtonAction: {
        value: function (event) {
            if (this.enabled){
                var pick = event.target.title,
                    random = Math.floor(Math.random() * (5)),
                    computer = this.content[random].name,
                    message;

                this.totalCount++;

                switch (pick) {
                    case "Rock":
                        if (computer == "Rock") {
                            message = "Rock vs Rock! Tie!";
                        } else if (computer == "Paper") {
                            message = "Paper covers Rock! You Lose!";
                        } else if (computer == "Scissors") {
                            message = "(and as it always has) Rock crushes scissors! You Win!";
                            this.winCount++;
                        } else if (computer == "Lizard") {
                            message = "Rock crushes Lizard! You Win!";
                            this.winCount++;
                        } else if (computer == "Spock") {
                            message = "Spock vaporizes Rock! You Lose!";
                        } else {
                            message = "There was an error!";
                        }
                        break;

                    case "Paper":
                        if (computer == "Rock") {
                            message = "Paper covers Rock! You Win!";
                            this.winCount++;
                        } else if (computer == "Paper") {
                            message = "Paper vs Paper! Tie!";
                        } else if (computer == "Scissors") {
                            message = "Scissors cuts Paper! You Lose!";
                        } else if (computer == "Lizard") {
                            message = "Lizard eats Paper! You Lose!";
                        } else if (computer == "Spock") {
                            message = "Paper disproves Spock! You Win!";
                            this.winCount++;
                        } else {
                            message = "There was an error!";
                        }
                        break;

                    case "Scissors":
                        if (computer == "Rock") {
                            message = "(and as it always has) Rock crushes scissors! You Lose!";
                        } else if (computer == "Paper") {
                            message = "Scissors cuts Paper! You Win!";
                            this.winCount++;
                        } else if (computer == "Scissors") {
                            message = "Scissors vs Scissors! Tie!";
                        } else if (computer == "Lizard") {
                            message = "Scissors decapitates Lizard! You Win!";
                            this.winCount++;
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
                            this.winCount++;
                        } else if (computer == "Scissors") {
                            message = "Scissors decapitates Lizard! You Lose!";
                        } else if (computer == "Lizard") {
                            message = "Lizard vs Lizard! Tie!";
                        } else if (computer == "Spock") {
                            message = "Lizard poisons Spock! You Win!";
                            this.winCount++;
                        } else {
                            message = "There was an error!";
                        }
                        break;

                    case "Spock":
                        if (computer == "Rock") {
                            message = "Spock vaporizes Rock! You Win!";
                            this.winCount++;
                        } else if (computer == "Paper") {
                            message = "Paper disproves Spock! You Lose!";
                        } else if (computer == "Scissors") {
                            message = "Spock smashes Scissors! You Win!";
                            this.winCount++;
                        } else if (computer == "Lizard") {
                            message = "Lizard poisons Spock! You Lose!";
                        } else if (computer == "Spock") {
                            message = "Spock vs Spock! Tie!";
                        } else {
                            message = "There was an error!";
                        }
                        break;
                }
                this.pick = pick;
                this.message = message;
                this.computer = computer;
                this.winPercent = Math.floor((this.winCount/this.totalCount) * 100);
            }
        }
    }


});
