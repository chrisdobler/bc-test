const app = require('./app');

// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8081;

app.listen(port, host, () => {
  console.log(`Running CORS Anywhere on ${host}:${port}`);
});
