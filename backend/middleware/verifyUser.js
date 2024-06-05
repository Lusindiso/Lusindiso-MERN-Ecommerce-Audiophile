import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

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
  verifyToken(req, res, async () => {
    const user = await User.findById(req.user.id).select(
      '-password',
    );
    if (user.id === req.params.id || user.isAdmin) {
      next();
    } else {
      res.status(403).send('Not authorized');
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, async () => {
    const user = await User.findById(req.user.id).select(
      '-password',
    );
    if (user.isAdmin) {
      next();
    } else {
      res.status(403).send('Not authorized');
    }
  });
};
