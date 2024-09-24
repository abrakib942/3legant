import { Button, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from "../redux/slices/cartSlice";
import { CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const ViewCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [shippingMethod, setShippingMethod] = useState("free");

  // Calculate shipping based on selection
  const shippingCost =
    shippingMethod === "express" ? 15 : shippingMethod === "pickup" ? 21 : 0;

  // Total with shipping
  const total = cart.totalPrice + shippingCost;

  const handleIncrease = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(decreaseCart(item));
    } else {
      dispatch(removeFromCart(item));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleShippingChange = (e) => {
    setShippingMethod(e.target.value);
  };

  return (
    <div className="cart lg:px-24 px-6 py-12">
      <h2 className="text-[32px] font-semibold mb-8">Cart</h2>

      {cart?.cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <>
          {/* Cart Items */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="cart-items">
              {cart?.cartItems.map((item) => (
                <div
                  key={item.id}
                  className="cart-item flex justify-between items-center mb-4 border-b pb-4"
                >
                  <div className="cart-item-info flex items-center">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-[80px] h-[80px] object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p>Color: {item.color}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Button onClick={() => handleDecrease(item)}>-</Button>
                        <span className="font-semibold text-lg">
                          {item.quantity}
                        </span>
                        <Button onClick={() => handleIncrease(item)}>+</Button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">{item.currentPrice}</p>
                    <Button
                      type="text"
                      icon={<CloseOutlined />}
                      onClick={() => handleRemove(item)}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="cart-summary border p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Cart summary</h3>

              {/* Shipping Options */}
              <Radio.Group
                onChange={handleShippingChange}
                value={shippingMethod}
                className="flex flex-col mb-4"
              >
                <Radio value="free">Free shipping ($0)</Radio>
                <Radio value="express">Express shipping (+$15)</Radio>
                <Radio value="pickup">Pick Up (+$21)</Radio>
              </Radio.Group>

              {/* Subtotal and Total */}
              <div className="flex justify-between">
                <p className="font-semibold">Subtotal:</p>
                <p className="font-semibold">${cart.totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="font-semibold">Shipping:</p>
                <p className="font-semibold">${shippingCost.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mt-4">
                <p className="font-semibold text-xl">Total:</p>
                <p className="font-semibold text-xl">${total.toFixed(2)}</p>
              </div>

              <Link to="/checkout">
                <Button className="bg-[#141718] text-white w-full mt-4">
                  Checkout
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewCart;
