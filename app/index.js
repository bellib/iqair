const server = require('./src/server');
const mongoose = require('mongoose');
const dbConfig = require('./src/config/db');


const PORT = process.env.PORT || 8080 ;

console.log('API_KEY',dbConfig.url)
mongoose.set('strictQuery', false);

 mongoose
  .connect(dbConfig.url)
  .then(() => {

    console.log("Connected to db"); 
    server.listen(PORT,() => {
      // run cron job
       require('./src/features/cron/cron.controller').runCroneJob();

        console.log('listening on *:'+ PORT); 
    });

   })  
  .catch((e) => console.log("error", e));