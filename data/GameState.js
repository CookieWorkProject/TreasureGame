const Compass = require("../obj/Compass.js");
const Player = require("../obj/Player.js");
const Treasure = require("../obj/Treasure.js");
const GameMap = require("./GameMap.js");
const prompt = require("prompt-sync")();



const GameState = {
	player : Player,
	treasure : Treasure,
	map : GameMap,
	compass : Compass,
	gameover : false,
	
	initGame : function()
	{
		
		this.player.xPos = 8;
		this.player.yPos = 8;
		this.treasure.xPos = 12;
		this.treasure.yPos = 4;
		this.gameover = false;
		
	},
	gameStep : function(input)
	{
		if (input === 'q') this.gameover = true;
		this.player.input = input;
		this.player.stepAction();
		if (this.player.xPos === this.treasure.xPos && this.player.yPos === this.treasure.yPos)
		{
			this.gameover = true;
			console.log("Congratulations you found the treasure");
		}
	},
	gameLoop : function()
	{
		while(this.gameover == false)
		{
			const input = prompt("Input your action: ");
			this.gameStep(input);
			
			
		}
	}
	
	
};

module.exports = GameState;