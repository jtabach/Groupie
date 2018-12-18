if (process.env.NODE_ENV === 'development') {
  module.exports = {
    serverUrl: 'http://localhost:5000/api',
    espnFantasyUrl: 'http://games.espn.com/ffl/api/v2'
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    serverUrl: 'https://gffl-backend.herokuapp.com/api',
    espnFantasyUrl: 'http://games.espn.com/ffl/api/v2'
  }
}