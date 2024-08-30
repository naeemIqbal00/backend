const bubble = require("../models/bubbleSchema");
const { createBubble, } = require('../service/bubbleService');
const { successResponse, failureResponse } = require("../utils/response")
const createNewBubble = async (req, res,) => {
    const { title, hasOptions, description, Options } = req.body;
    const bubbleData = {
        title,
        hasOptions,
        description,
        Options: hasOptions ? Options : []
    };
    try {
        const createdBubble = await createBubble(bubbleData);
        return successResponse(
            res,
            "Bubble Created Successfully",
            createdBubble,
            201,
        )

    } catch (error) {
        failureResponse(
            res,
            "Error creating bubble",
            400,

        )

    }

    module.exports = { createNewBubble }


}