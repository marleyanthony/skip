const express = require('express');
const app = express();
const cors = require('cors');
const restaurantRoutes = require('./routes/restaurantRoutes');

require('dotenv').config();

app.use(cors());

app.use(express.json());

//allows the use of static files inside the server's 'public' folder
app.use(express.static('public'));

//mounts the router requests on to the path /listings
app.use('/restaurants', restaurantRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`);
});