const GameState = require("../data/GameState.js");
const assert = require('assert');

GameState.initGame();

//Movement Test
assert.strictEqual(GameState.player.xPos, 8);
assert.strictEqual(GameState.player.yPos, 8);
GameState.gameStep("r");
assert.strictEqual(GameState.player.xPos, 9);
assert.strictEqual(GameState.player.yPos, 8);
GameState.gameStep("l");
assert.strictEqual(GameState.player.xPos, 8);
assert.strictEqual(GameState.player.yPos, 8);
GameState.gameStep("u");
assert.strictEqual(GameState.player.xPos, 8);
assert.strictEqual(GameState.player.yPos, 7);
GameState.gameStep("d");
assert.strictEqual(GameState.player.xPos, 8);
assert.strictEqual(GameState.player.yPos, 8);

//Quit Test
GameState.initGame();
GameState.gameStep("q");
assert.strictEqual(GameState.gameover, true);


//Win Test
GameState.initGame();
for (let i = 0; i < 4; i++) {
GameState.gameStep("r");
GameState.gameStep("u");
}
assert.strictEqual(GameState.gameover, true);