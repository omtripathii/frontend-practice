const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const { CardDb } = require("./db");
app.use(cors());
// Creating card
app.post("/create-card", async (req, res) => {
  try {
    const cardData = req.body;
    await CardDb.create({
      name: cardData.name,
      about: cardData.about,
      hobies: cardData.hobies,
      Linkdin: cardData.Linkdin,
      Twitter: cardData.Twitter,
    });
    res.status(200).json({
      msg: "Stored Successfully",
    });
  } catch (error) {
    console.error(error);
  }
});

//fetching Cards
app.get("/cards", async (req, res) => {
  const response = await CardDb.find({});
//   const data = await response.json()
  res.status(200).json({
    response,
  });
});

//updating card
app.patch("/update", async (req, res) => {
  res.send("ok");
});

app.listen(3000, () => {
  console.log("Server Running in 3000");
});
