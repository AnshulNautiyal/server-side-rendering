import express from "express";
import render from '../server/helper/renderer';
const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
app.use(express.static("public"));
app.get("/", (req, resp) => {
  console.log("I am sending something...");
  return resp.send(render());
});
