const express = require("express");
const PORT = 8080;

const app = express();

// middleware to parse requests to json
app.use(express.json());

console.log("Started!");
app.listen(PORT, () => console.log(`It's alive on http://localhost:${PORT}`));

app.get("/tshirt", (req, res) => {
  res.status(200).send({ colour: "Black🖤", size: "Med" });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { size } = req.body;
  const { colour } = req.body;
  const { logo } = req.body;

  if (!size || !logo || !colour)
    res.status(418).send({ message: "Invalid input!" });

  res.send({
    tshirt: `Posted t-shirt ${id} - ${colour} ${size} with ${logo}.`,
  });
});
