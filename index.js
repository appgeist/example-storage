const storage = require('@appgeist/storage');

const [host, port] = ['0.0.0.0', 3000];

storage().listen(port, host, (err) => {
  if (err) throw err;
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://${host}:${port}...`);
});
