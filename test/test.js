const GameState = require("../data/GameState.js");
const assert = require('assert');

GameState.initGame();

//Movement Test
assert.strictEqual(GameState.player.xPos, 8,"test");
assert.strictEqual(GameState.player.yPos, 8,"test");
GameState.gameStep("r");
assert.strictEqual(GameState.player.xPos, 9,"test");
assert.strictEqual(GameState.player.yPos, 8,"test");
GameState.gameStep("l");
assert.strictEqual(GameState.player.xPos, 8,"test");
assert.strictEqual(GameState.player.yPos, 8,"test");
GameState.gameStep("u");
assert.strictEqual(GameState.player.xPos, 8,"test");
assert.strictEqual(GameState.player.yPos, 7,"test");
GameState.gameStep("d");
assert.strictEqual(GameState.player.xPos, 8,"test");
assert.strictEqual(GameState.player.yPos, 8,"test");

//Quit Test
GameState.initGame();
GameState.gameStep("q");
assert.strictEqual(GameState.gameover, true,"test");


//Win Test
GameState.initGame();
for (let i = 0; i < 4; i++) {
GameState.gameStep("r");
GameState.gameStep("u");
}
assert.strictEqual(GameState.gameover, true,"test");