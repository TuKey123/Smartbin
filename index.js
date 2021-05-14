const express = require("express");
const path = require("path");
const axios = require('axios');

var bin = []
axios.get('https://web-service-smartbin.herokuapp.com/bin/all').
  then(res=>{
    var arr = res.data;
    bin = arr.map(val=>{
      return {
        id:val.id,
        name:val.name,
        containers:[],
        trashes:[]
      }
    })
  }).
  then(()=>{
    bin.forEach(element => {
      axios.get(`https://web-service-smartbin.herokuapp.com/bin/all_detail?binId=${element.id}`).
      then(res=>{
          const containing = res.data.containing;
          containing.forEach(ob => element.containers.push({id:ob.id_con,total:ob.containing,data_timestamp: [65, 60, 100, 65, 54, 86]}));
      }).
      then(()=>{
        axios.get(`http://web-service-smartbin.herokuapp.com/collection/latest?binId=${element.id}`).
        then(res => {
          const trashes = res.data;
          element.trashes = trashes.map(val => {
            if(val.trashId === 1) return ['bottle',val.total];
            else if(val.trashId === 2) return ['plasticBag',val.total];
            else return ['can',val.total];
          })
        })
      });
      })
    });
const bins = [
  {
    id: 1,
    name: "Bin 1",
    location: "25.1346",
    containers: [
      { id: 1, trash: 50, data_timestamp: [65, 60, 100, 65, 54, 86] },
      { id: 2, trash: 40, data_timestamp: [41, 14, 37, 26, 79, 46] },
      { id: 3, trash: 80, data_timestamp: [94, 12, 44, 57, 43, 24] },
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
      { id: 1, trash: 10, space: 90, data_timestamp: [81, 80, 59, 100, 3, 65] },
      { id: 2, trash: 10, space: 90, data_timestamp: [60, 2, 24, 26, 1, 32] },
      { id: 3, trash: 10, space: 90, data_timestamp: [ 38, 59, 67, 20, 16, 44] },
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
      { id: 1, trash: 100, space: 0, data_timestamp: [ 20, 55, 46, 98, 32, 65] },
      { id: 2, trash: 0, space: 100, data_timestamp: [ 56, 41, 9, 24, 66, 79] },
      { id: 3, trash: 80, space: 20, data_timestamp: [ 83, 31, 78, 59, 2, 27] },
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
      { id: 1, trash: 78, space: 22, data_timestamp: [ 5, 20, 76, 71, 92, 82] },
      { id: 2, trash: 22, space: 78, data_timestamp: [ 42, 36, 22, 28, 100, 63] },
      { id: 3, trash: 33, space: 67, data_timestamp: [ 91, 94, 92, 33, 67, 39] },
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
  res.send(bin);
});

