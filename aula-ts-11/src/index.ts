import express, { Request, Response, json } from "express";
import { Game } from "./protocols/game-protocol.ts";
import gamesService from "./service/games-service.ts";
import httpStatus from "http-status";

const app = express();
app.use(json());

app.post("/games", (req: Request, res: Response) => {
  const body = req.body as Omit<Game, "id">;
  try {
    gamesService.createGame(body);
    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    console.log(error);
    res.sendStatus(httpStatus.CONFLICT);
  }
});

app.get("/games", (_req: Request, res: Response) => {
  const games = gamesService.getGames();
  res.send(games);
});

app.listen(5000, () => console.log(`Server is up and running or port 5000`));