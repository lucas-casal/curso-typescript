import { db } from "../database/database.ts";
import { Game } from "../protocols/game-protocol.ts";

async function getGames() {
  const result = (await db.query<Game[]>(`SELECT * FROM games;`)).rows
  return result;
}

function createGame(game: Omit<Game, "id">) {
  return db.query<Omit<Game, "id">>(`INSERT INTO games (title, platform) VALUES ($1, $2);`, [game])
}

async function getGameByTitleAndPlatform(game: Game) {
  const found = (await db.query<Omit<Game, "id">>(`SELECT * FROM games WHERE title=$1 AND platform=$2);`, [game])).rows[0]
  return found;

}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;