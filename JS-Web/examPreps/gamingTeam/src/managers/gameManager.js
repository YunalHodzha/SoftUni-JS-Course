const Game = require('../models/Game');

exports.create = async (cubeData) => {
    const game = new Game(cubeData);
    await game.save();

    return game;
}