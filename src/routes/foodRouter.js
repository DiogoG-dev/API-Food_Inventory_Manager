const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

router.get('/foods', foodController.getAllFoods);
router.get('/foods/:_id', foodController.getFoodById);
router.post('/foods', foodController.createNewFood);
router.put('/foods/:_id', foodController.updateFood);
router.delete('/foods/:_id', foodController.deleteFood);

module.exports = router;