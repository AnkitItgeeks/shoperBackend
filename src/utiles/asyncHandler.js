const asyncHandler = (reuestHandler) => {
    (req, res, next) => {
        Promise.resolve(reuestHandler(req, res, next)).
            catch((err) => next(err))
    }
}

export { asyncHandler }