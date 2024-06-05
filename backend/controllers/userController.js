import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import gravatar from 'gravatar';

import User from '../models/userModel.js';

export const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  const { name, email, password, isAdmin } = req.body;
  // see if user exists
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        errors: [{ msg: 'User already exists!' }],
      });
    }

    // Get gravatar
    const avatar = gravatar.url(email, {
      s: '200',
      r: 'pg',
      d: 'mm',
    });

    user = new User({
      name,
      email,
      avatar,
      password,
      isAdmin,
    });

    // encrypt password

    user.password = await bcrypt.hash(password, 10);
    await user.save();

    // Set JWT payload
    const payload = {
      user: {
        id: user.id,
        isAdmin: user.isAdmin,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SEC,
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      },
    );

    res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
};

export const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = await bcrypt.hash(
      req.body.password,
      10,
    );
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).send('server error');
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send('User has been deleted');
  } catch (error) {
    res.status(500).send('server error');
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select(
      '-password',
    );
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};
