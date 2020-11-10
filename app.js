const Express = require('express');
const app = Express();

app.get('/',(req,res)=>{
    res.send("Hello Bootcamp");
})

const PORT = process.env.PORT || 4000
app.listen(PORT,()=>console.log(`Server running at port ${PORT}`))