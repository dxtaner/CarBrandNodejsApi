const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();

const carRoutes = require('./routes/carRoutes');
const userRoutes = require('./routes/userRoutes');
const brandRoutes = require('./routes/brandRoutes');

const dbURL="mongodb+srv://taner16:taner123@cluster0.guofsiq.mongodb.net/test";
mongoose.connect(dbURL
, { useNewUrlParser: true }).then(() => 
console.log("DB connect succesfully"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Hell!");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(
//     methodOverride('_method', {
//         methods: ['POST', 'GET'],
//     })
// );

app.use("/api", userRoutes)
app.use("/api", carRoutes)
app.use("/api", brandRoutes)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App Started ${port}`)
})