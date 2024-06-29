const foodModel = require('../models/foodModel');

const getAllFoods = async () => {
    const foods = await foodModel.find({});
    return foods;
};

const getFoodById = async (_id) => {
    return await foodModel.findOne({ _id });
};

const createNewFood = async (foodDate) => {
    const food = new foodModel(foodDate);
    await food.save();
    return food;
};

const updateFoodById = async (id, foodDate) => {
    await foodModel.updateOne(
        { _id: id },
        { $set: foodDate }
    );
};

const deleteFoodById = async (_id) => {
    return await foodModel.findOneAndDelete({_id});
};

module.exports = {
    getAllFoods,
    getFoodById,
    createNewFood,
    updateFoodById,
    deleteFoodById
};