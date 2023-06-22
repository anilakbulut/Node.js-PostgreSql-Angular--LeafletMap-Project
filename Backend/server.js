const express = require("express");
const locationRoutes = require('./src/location/routes');

const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS ayarları
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Tüm URL'lerden gelen isteklere açık
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE"); // CRUD işlemlerine açık
    next();
  });

// app.get("/", (req,res) => {
//     res.send("Hello World!"); //Test amaçlı
// })

app.use("/api/test/locations",locationRoutes);

app.listen(port, ()=> console.log(`portta calisiyor: ${port}`));
