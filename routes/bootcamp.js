const Express = require('express');
const { getBootcamps,getBootcamp,createBootcamp,updateBootcamp,deleteBootcamp } = require('../controllers/bootcamp');
const Router = Express.Router();

Router.route('/').get(getBootcamps).post(createBootcamp);
Router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);

module.exports = Router