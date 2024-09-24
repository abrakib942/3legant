import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from "../redux/slices/cartSlice";
import { CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart); // Access cart state from Redux
  const dispatch = useDispatch();

  // Handle Increase Quantity
  const handleIncrease = (item) => {
    dispatch(addToCart(item)); // This will increase the quantity of the item
  };

  // Handle Decrease Quantity
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(decreaseCart(item)); // This will decrease the quantity of the item
    } else {
      dispatch(removeFromCart(item)); // Remove item if quantity is 1
    }
  };

  // Handle Remove Item
  const handleRemove = (item) => {
    dispatch(removeFromCart(item)); // Remove item from cart
  };

  return (
    <div className="cart">
      <h2 className="text-[24px] font-semibold">Cart</h2>

      {cart.cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item flex justify-between items-center mb-4"
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

                    <div className=" flex items-center gap-1">
                      <div>
                        <Button
                          onClick={() => handleDecrease(item)}
                          className="text-[20px] font-bold"
                          type="text"
                        >
                          -
                        </Button>
                      </div>
                      <div className="font-semibold text-[20px] mt-2">
                        {item.quantity}
                      </div>
                      <div>
                        <Button
                          onClick={() => handleIncrease(item)}
                          className="text-[20px] font-bold mb-1"
                          type="text"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold">{item.price}</p>
                  <Button
                    type="text"
                    icon={<CloseOutlined />}
                    onClick={() => handleRemove(item)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary mt-4">
            <div className="flex justify-between">
              <p className="font-semibold">Subtotal:</p>
              <p className="font-semibold">${cart.totalPrice}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Total:</p>
              <p className="font-semibold text-[24px]">${cart.totalPrice}</p>
            </div>

            <Link to="/checkout">
              <Button className="bg-[#141718] text-white w-full mt-4 font-semibold">
                Checkout
              </Button>
            </Link>

            <Link to="/viewCart">
              <Button className="text-black mt-2 w-full" type="link">
                View Cart
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
