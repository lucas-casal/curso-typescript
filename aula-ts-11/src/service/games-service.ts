import gamesRepository from "../repository/games-repository.ts";
import { Game } from "../protocols/game-protocol.ts";

function getGames() {
  return gamesRepository.getGames();
}

function createGame(game: Omit<Game, "id">) {
  if (gameAlreadyExists(game)) {
    throw { message: "Game already exists" }
  }

  gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: Game) {
  const result = await gamesRepository.getGameByTitleAndPlatform(game);
  return result ? true : false;
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;