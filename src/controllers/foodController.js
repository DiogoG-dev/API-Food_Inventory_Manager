const foodService = require('../services/foodService');

const getAllFoods = async (req, res) => {
    try {
        const foods = await foodService.getAllFoods();
        res.json(foods);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

const getFoodById = async (req, res) => {
    try {
        const food = await foodService.getFoodById(req.params._id);
        if (!food) {
            return res.status(404).json({ message: 'Food not found!' });
        }
        res.json(food);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const createNewFood = async (req, res) => {
    try {
        const newFood = await foodService.createNewFood(req.body);
        res.status(201).json(newFood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateFood = async (req, res) => {
    try {
        const food = await foodService.getFoodById(req.params._id);
        if (!food) {
            return res.status(404).json({ message: 'Food not found!' });
        }
        const updatedFood = await foodService.updateFoodById(req.params._id, req.body);
        res.status(201).json({ message: 'Updated food!'});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteFood = async (req, res) => {
    try {
        const deletedFood = await foodService.deleteFoodById(req.params._id);
        res.status(201).json({ message: 'Food excluded from the bank!'});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllFoods,
    getFoodById,
    createNewFood,
    updateFood,
    deleteFood
};