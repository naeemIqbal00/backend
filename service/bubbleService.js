const bubble = require("../models/bubbleSchema");


const createBubble = async (bubbleData) => {
    try {
        const newBubble = await bubble.create(bubbleData);
        return newBubble;
    } catch (error) {
        console.error('Error creating bubble:', error);
        throw error;
    }
};


const updateBubble = async (id, updateData) => {
    try {
        const updatedBubble = await bubble.findOneAndUpdate(
            { _id: id },
            updateData,
            { new: true, runValidators: true }
        );
        return updatedBubble;
    } catch (error) {
        console.error('Error updating bubble:', error);
        throw error;
    }
};

module.exports = { createBubble, updateBubble };
