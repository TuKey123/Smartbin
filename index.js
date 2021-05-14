const express = require("express");
const path = require("path");
const axios = require('axios');

var bins = []
axios.get('https://web-service-smartbin.herokuapp.com/bin/all').
  then(res=>{
    var arr = [];
    res.data.forEach(element => {
      if(element.id!==3)
        arr.push(element);
    });

    bins = arr.map(val=>{
      return {
        id:val.id,
        name:val.name,
        location:"26.64",
        containers:[],
        trashes:[]
      }  
    })
  }).
  then(()=>{
    bins.forEach(element => {
      axios.get(`https://web-service-smartbin.herokuapp.com/bin/all_detail?binId=${element.id}`).
      then(res=>{
          const containing = res.data.containing;
          containing.forEach(ob => element.containers.push({id:ob.id_con,trash:ob.containing,data_timestamp: [65, 60, 100, 65, 54, 86]}));
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

