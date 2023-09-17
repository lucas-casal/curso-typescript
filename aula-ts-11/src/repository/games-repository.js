"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var games = [];
function getGames() {
    return games;
}
function createGame(game) {
    games.push(game);
}
function getGameByTitleAndPlatform(game) {
    return games.find(function (_a) {
        var title = _a.title, platform = _a.platform;
        return game.title === title && game.platform === platform;
    });
}
var gamesRepository = {
    getGames: getGames,
    getGameByTitleAndPlatform: getGameByTitleAndPlatform,
    createGame: createGame
};
exports.default = gamesRepository;
