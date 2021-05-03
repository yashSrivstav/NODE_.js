module.exports = (req, res, next) => {
    console.log("current route is", req.originalUrl)
    next();
}
