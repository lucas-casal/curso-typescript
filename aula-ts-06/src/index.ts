type Platform = {
    id: number,
    name: string
}
const game: {
    id: number,
    platform: Platform,
    title: string,
    publisher: string,
    launch?: Date | string

    } = {
    id: 1,
    platform: {
        id: 1,
        name: "Playstation"
    },
    title: "The Last of Us",
    publisher: "Naughty Dog",
    launch: "2013-06-14" // pode ser um Date. É opcional (para jogos ainda não lançados).
}

const games = [game];

function play(game: object): void{
    // runs the game
    console.log(game);
}