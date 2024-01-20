import { server } from "./app.js";

const port = 3000;

server.listen(port, () => {
  console.log(`App listening on http://127.0.0.1:${port}`);
});
