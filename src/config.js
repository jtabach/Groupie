let serverUrl;

if (!process.env.REACT_APP_SERVER_URL) {
  serverUrl = 'http://localhost:5000/api';
} else {
  serverUrl = 'https://gffl-backend.herokuapp.com/api';
}

export default { serverUrl };
