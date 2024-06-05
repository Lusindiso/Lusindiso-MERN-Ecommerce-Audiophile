import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.header('x-auth-token');

  // check token
  if (!token) {
    return res
      .status(401)
      .json({ msg: 'No token, authorization denied' });
  }

  // verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SEC);

    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('Not authorized');
    }
  });
};
