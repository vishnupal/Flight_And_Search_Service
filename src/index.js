const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const { City } = require('./models/index');

const setupAndStartServer = async () => {
  // create the express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api', ApiRoutes);
  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    // if (process.env.SYNC_DB) {
    //   db.sequelize.sync({ alter: true });
    // }
    // const city = await City.findOne({
    //   where: { Id: 6 },
    // });
    // console.log(Object.keys(city.sequelize.__proto__));

    // const airports = await city.getAirports();
    //   const newAirport = await Airport.findOne({
    //     where: { Id: 17 },
    //   });
    //   await city.addAirport(newAirport);
    //   console.log(city, airports);
  });
};

setupAndStartServer();
