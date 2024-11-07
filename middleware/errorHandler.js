const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.status(statusCode).json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: process.env.NODE_ENV === 'development' ? err.stack : "No stack in production",
            });
            break;

        case constants.NOT_FOUND:
            res.status(statusCode).json({
                title: "Not Found",
                message: err.message,
                stackTrace: process.env.NODE_ENV === 'development' ? err.stack : "No stack in production",
            });
            break;

        case constants.SERVER_ERROR:
            res.status(statusCode).json({
                title: "Server Error",
                message: "An internal server error occurred",
                stackTrace: process.env.NODE_ENV === 'development' ? err.stack : "No stack in production",
            });
            break;

        default:
            res.status(500).json({
                title: "Unexpected Error",
                message: err.message || "An unexpected error occurred",
                stackTrace: process.env.NODE_ENV === 'development' ? err.stack : "No stack in production",
            });
            break;
    }
};

module.exports = errorHandler;
