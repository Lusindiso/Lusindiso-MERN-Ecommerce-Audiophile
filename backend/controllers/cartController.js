import Cart from '../models/cartModel.js';

export const createCart = async (req, res) => {
  try {
    const cart = new Cart(req.body);
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).send('server error');
  }
};

export const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).send('Cart has been deleted');
  } catch (error) {
    res.status(500).send('Server error');
  }
};

export const getUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      userId: req.params.userId,
    });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).send('server error');
  }
};

export const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find({});

    res.status(200).json(carts);
  } catch (error) {
    res.status(500).send('server error');
  }
};
