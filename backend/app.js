const express = require('express');
const app = express();
const cors = require("cors");
port = 3000

app.use(cors());

app.listen(port, () => {
    console.log("example running on port 3000!")
});

// app.get('/', (req, res) => {
//   res.sendFile("C:/Users/tmaru/OneDrive/BCIT_CST_Term1/COMP1537/lab9/lab9-weather-app-node-js-and-express-js-TatsunoriMarumo/frontend/index.html");
// });

// app.get('/index.js', (req, res) => {
//   res.sendFile('C:/Users/tmaru/OneDrive/BCIT_CST_Term1/COMP1537/lab9/lab9-weather-app-node-js-and-express-js-TatsunoriMarumo/frontend/index.js');
// });

app.get("/weather", async (req, res) => {
    console.log(req.query.city);
    resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=ac20d06da2285b9916a1f2f6d46c221d&units=metric`)
    respJson = await resp.json()
    res.send(respJson)
});
