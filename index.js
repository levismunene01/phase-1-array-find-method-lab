function superbowlWin(teamRecord) {
    const winningGame = teamRecord.find(game => game.result === "W")
    return winningGame ? winningGame.year : undefined
    
}

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
