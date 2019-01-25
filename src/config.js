let serverUrl;

if (process.env.NODE_ENV === 'development') {
  serverUrl = 'http://localhost:5000/api';
} else {
  serverUrl = 'https://gffl-backend.herokuapp.com/api';
}

export default { serverUrl };
