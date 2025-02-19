const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 9000;
app.use(express.json());
app.use(cors());

let products = [];
app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
