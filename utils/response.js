
const successResponse = (res, message, data = {}, statusCode = 200) => {
    return res.status(statusCode)({
        success: true,
        message,
        data,
    });
};

const failureResponse = (res, message, error = {}, statusCode = 500) => {
    return res.status(statusCode).json({
        success: false,
        message,
        error,
    });
};

module.exports = {
    successResponse,
    failureResponse,
};
