import jwt from 'jsonwebtoken';

const verifyUser = (req, res, next) => {
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

export default verifyUser;
