var express = require('express');
 
const router = express.Router();
 
var Controller = require('../src/Controller');
 
router.route('/getAll').get(Controller.getDataConntrollerfn);
 
router.route('/create').post(Controller.createControllerFn);
 
router.route('/update/:id').patch(Controller.updateController);
 
router.route('/delete/:id').delete(Controller.deleteController);
 
module.exports = router;