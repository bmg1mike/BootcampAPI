const Express = require('express');
const dotEnv = require('dotenv');
const bootcamps = require('./routes/bootcamp');
const Database = require('./config/db');
const logger = require('morgan');
const app = Express();

dotEnv.config({path : './config/config.env'});
app.use(Express.json());
app.use(logger('dev'));
Database()
app.use('/api/bootcamps',bootcamps);



const PORT = process.env.PORT || 4000
const server = app.listen(PORT,()=>console.log(`Server running at port ${PORT}`))

process.on('unhandledRejection',(err)=>{
    console.log(`${err.message}`);
    server.close(()=>process.exit(1))
})