export const user = (req, res, next) => {
  res.locals.user = req.session.user || null;

  res.cookie("user", new Date().toISOString(), {
    maxAge: 2 * 24 * 60 * 60 * 1000,
  });
  next();
};
