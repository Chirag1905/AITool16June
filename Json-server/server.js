const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Add custom middleware to set CORS headers
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH"); // Use a single comma-separated string
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  if (req.method === "OPTIONS") {
    res.sendStatus(200); // Handle pre-flight requests
  } else {
    next();
  }
});

server.use(middlewares);
server.use(router);

const port = 8000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
