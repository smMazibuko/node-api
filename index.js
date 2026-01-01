const express = require("express");
const PORT = 8080;

const app = express();

// middleware to parse requests to json
app.use(express.json());

console.log("Started!");
app.listen(PORT, () => console.log(`It's alive on http://localhost:${PORT}`));

app.get("/tshirt", (req, res) => {
  res.status(200).send({ colour: "Black", size: "Med", logo: "💀" });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { colour } = req.body;
  const { size } = req.body;
  const { logo } = req.body;

  if (!colour || !size || !logo)
    res.status(418).send({ message: "Invalid input!" });

  res.send({
    tshirt: `Posted t-shirt #${id} - ${colour} ${size} with a ${logo} logo.`,
  });
});
