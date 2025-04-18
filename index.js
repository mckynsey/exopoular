const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const articleRoute = require("./routes/ArticlesRoutes");
app.use("/articles", articleRoute);


app.use((req, res) => {
  res.status(404).json({ message: "Route non trouvé" });
});

app.listen(process.env.PORT, () => {
  console.log(
    `✅ Votre serveur est lancé sur http://127.0.0.1:${process.env.PORT}`
  );
});
