export const user = (req, res, next) => {
  res.locals.user = req.session.user || null;

  res.cookie("user", JSON.stringify(res.locals.user), {
    maxAge: 2 * 24 * 60 * 60 * 1000,
  });
    next();
};
