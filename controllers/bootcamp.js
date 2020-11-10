
exports.getBootcamps = (req,res,next) => {
    res.send("Get All Bootcamps");
}

exports.getBootcamp = (req,res) => {
    res.send(`Display Bootcamp with an id of ${req.params.id}`);
}

exports.createBootcamp = (req,res) => {
    res.send(`Create a new bootcamp`);
}

exports.updateBootcamp = (req,res) => {
    res.send(`Update a Bootcamp with id of ${req.params.id}`);
}

exports.deleteBootcamp = (req,res) => {
    res.send(`Delete a Bootcamp with id of ${req.params.id}`);
}