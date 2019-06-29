const team = {
    _players: [{
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Pete',
            lastName: 'Wheeler',
            age: 12
        },
        {
            firstName: 'Sam',
            lastName: 'Sneed',
            age: 10
        }
    ],
    _games: [{
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Colts',
            teamPoints: 48,
            opponentPoints: 37
        },
        {
            opponent: 'Jets',
            teamPoints: 32,
            opponentPoints: 23
        },
    ],
    get players() {
        return this._players
    },
    get games() {
        return this._games
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        return this.players.push(player);
    },
    addGame(opponentsName, ourTeamPoints, opponentsPoints) {
        let game = {
            opponentsName: opponentsName,
            ourTeamPoints: ourTeamPoints,
            opponentsPoints: opponentsPoints
        };
        return this.games.push(game);
    }
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Pacers', 85, 92);
team.addGame('Timberwolves', 79, 78);
team.addGame('Jazz', 102, 100);

console.log(team.games);