export const user = (req, res, next) => {
    res.locals.user = req.session.user || null;
}