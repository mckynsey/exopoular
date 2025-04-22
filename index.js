const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const articleRoute = require("./routes/ArticlesRoutes");
app.use("/articles", articleRoute);

const bdcRoute = require("./routes/BdcsRoutes");
app.use("/bdc", bdcRoute);

const buseRoute = require("./routes/BusesRoutes");
app.use("/buses", buseRoute);

const concoursRoute = require("./routes/ConcoursRoutes");
app.use("/concours", concoursRoute);

const eleveRoute = require("./routes/ElevesRoutes");
app.use("/eleves", eleveRoute);

const maisonRoute = require("./routes/MaisonsRoutes");
app.use("/maisons", maisonRoute);

const notationRoute = require("./routes/NotationsRoutes");
app.use("/notations", notationRoute);

const rentreeRoute = require("./routes/RentreesRoutes");
app.use("/rentrees", rentreeRoute);

const vacanceRoute = require("./routes/VacancesRoutes");
app.use("/vacances", vacanceRoute);



app.use((req, res) => {
  res.status(404).json({ message: "Route non trouvé" });
});

app.listen(process.env.PORT, () => {
  console.log(
    `✅ Votre serveur est lancé sur http://127.0.0.1:${process.env.PORT}`
  );
});
