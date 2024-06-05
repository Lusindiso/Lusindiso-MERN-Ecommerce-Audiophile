import Order from '../models/orderModel.js';

export const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).send('server error');
  }
};

export const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).send('Order has been deleted');
  } catch (error) {
    res.status(500).send('Server error');
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await Cart.find({
      userId: req.params.userId,
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).send('server error');
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).send('server error');
  }
};
