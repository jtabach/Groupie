if (process.env.NODE_ENV === 'development') {
  module.exports = {
    serverUrl: 'http://localhost:5000/api'
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    serverUrl: 'https://gffl-backend.herokuapp.com/api'
  }
}