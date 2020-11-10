const Express = require('express');
const bootcamps = require('./routes/bootcamp');
const app = Express();
app.use('/api/bootcamps',bootcamps);



const PORT = process.env.PORT || 4000
app.listen(PORT,()=>console.log(`Server running at port ${PORT}`))