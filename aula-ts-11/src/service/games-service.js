"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var games_repository_ts_1 = require("../repository/games-repository.ts");
function getGames() {
    return games_repository_ts_1.default.getGames();
}
function createGame(game) {
    if (gameAlreadyExists(game)) {
        throw { message: "Game already exists" };
    }
    games_repository_ts_1.default.createGame(game);
}
function gameAlreadyExists(game) {
    var result = games_repository_ts_1.default.getGameByTitleAndPlatform(game);
    return result ? true : false;
}
var gamesService = {
    getGames: getGames,
    createGame: createGame
};
exports.default = gamesService;
