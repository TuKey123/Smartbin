const functions = require("firebase-functions");
const express = require("express");
const path = require("path");

const bins = [
  {
    id: 1,
    name: "Bin 1",
    location: "25.1346",
    containers: [
      { id: 1, trash: 50, space: 50 },
      { id: 2, trash: 40, space: 60 },
      { id: 3, trash: 80, space: 20 },
    ],
    trashes: [
      ["bottle", 37],
      ["plasticBag", 94],
      ["can", 75],
    ],
  },
  {
    id: 2,
    name: "Bin 2",
    location: "25.1346",
    containers: [
      { id: 1, trash: 10, space: 90 },
      { id: 2, trash: 10, space: 90 },
      { id: 3, trash: 10, space: 90 },
    ],
    trashes: [
      ["bottle", 11],
      ["plasticBag", 2],
      ["can", 20],
    ],
  },
  {
    id: 3,
    name: "Bin 3",
    location: "25.1346",
    containers: [
      { id: 1, trash: 100, space: 0 },
      { id: 2, trash: 0, space: 100 },
      { id: 3, trash: 80, space: 20 },
    ],
    trashes: [
      ["bottle", 231],
      ["plasticBag", 100],
      ["can", 12],
    ],
  },
  {
    id: 4,
    name: "Bin 4",
    location: "25.1346",
    containers: [
      { id: 1, trash: 78, space: 22 },
      { id: 2, trash: 22, space: 78 },
      { id: 3, trash: 33, space: 67 },
    ],
    trashes: [
      ["bottle", 41],
      ["plasticBag", 56],
      ["can", 98],
    ],
  },
];

const app = express();

const PORT = process.env.PORT || 9000;
app.listen(PORT);

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/bins", (req, res) => {
  res.send(bins);
});

