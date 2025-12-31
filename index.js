console.log("Started!");

const package = require("express");
const PORT = 8080;

const app = package();

app.listen(PORT, () => console.log(`It's alive on http://localhost:${PORT}`));
