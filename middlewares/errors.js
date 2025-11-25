export const errorMiddleware = (err, req, res, next) => {
    console.error(error);
    return res.status(error.statusCode || 500).json({
        message: error.message || "Something went wrong",
    })
}