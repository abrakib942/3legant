import { Button, Input, Radio } from "antd";
import { useState } from "react";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="checkout lg:px-24 px-6 py-8">
      <h1 className="text-[36px] font-bold mb-6">Check Out</h1>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left Side - Contact, Shipping, and Payment Information */}
        <div className="lg:col-span-8">
          {/* Contact Information */}
          <div className="border p-6 rounded-lg mb-6">
            <h2 className="text-[24px] font-semibold mb-4">
              Contact Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="First name" className="col-span-1" />
              <Input placeholder="Last name" className="col-span-1" />
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4">
              <Input placeholder="Phone number" />
              <Input placeholder="Your Email" />
            </div>
          </div>

          {/* Shipping Address */}
          <div className="border p-6 rounded-lg mb-6">
            <h2 className="text-[24px] font-semibold mb-4">Shipping Address</h2>
            <div className="grid grid-cols-1 gap-4">
              <Input placeholder="Street Address" />
              <Input placeholder="Country" />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Town / City" />
                <Input placeholder="State" />
              </div>
              <Input placeholder="Zip Code" />
            </div>
            <div className="mt-4">
              <input type="checkbox" id="differentBilling" />
              <label htmlFor="differentBilling" className="ml-2">
                Use a different billing address (optional)
              </label>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border p-6 rounded-lg">
            <h2 className="text-[24px] font-semibold mb-4">Payment Method</h2>
            <Radio.Group
              onChange={handlePaymentChange}
              value={paymentMethod}
              className="mb-4"
            >
              <Radio value="card">Pay by Card Credit</Radio>
              <Radio value="paypal">Paypal</Radio>
            </Radio.Group>

            {paymentMethod === "card" && (
              <div className="grid grid-cols-1 gap-4">
                <Input placeholder="Card Number" />
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="MM/YY" />
                  <Input placeholder="CVC code" />
                </div>
              </div>
            )}

            <Button type="primary" className="mt-4 w-full bg-black text-white">
              Place Order
            </Button>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="lg:col-span-4">
          <div className="border p-6 rounded-lg">
            <h2 className="text-[24px] font-semibold mb-4">Order Summary</h2>

            {/* Order Items */}
            <div className="cart-items mb-4">
              <div className="cart-item flex justify-between items-center mb-4">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Tray Table"
                  className="w-[80px] h-[80px] object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">Tray Table</h3>
                  <p>Color: Black</p>
                  <p className="font-semibold">$19.19</p>
                </div>
                <div className="cart-item-quantity flex items-center gap-3">
                  <span className="font-semibold">2</span>
                </div>
              </div>

              <div className="cart-item flex justify-between items-center mb-4">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Tray Table"
                  className="w-[80px] h-[80px] object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">Tray Table</h3>
                  <p>Color: Red</p>
                  <p className="font-semibold">$19.19</p>
                </div>
                <div className="cart-item-quantity flex items-center gap-3">
                  <span className="font-semibold">2</span>
                </div>
              </div>

              <div className="cart-item flex justify-between items-center mb-4">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Table Lamp"
                  className="w-[80px] h-[80px] object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">Table Lamp</h3>
                  <p>Color: Gold</p>
                  <p className="font-semibold">$39.00</p>
                </div>
                <div className="cart-item-quantity flex items-center gap-3">
                  <span className="font-semibold">2</span>
                </div>
              </div>
            </div>

            {/* Discount */}
            <div className="mb-4">
              <Input placeholder="Input" className="mb-2" />
              <Button className="w-full">Apply</Button>
              <p className="mt-2 text-green-500">- $25.00 (Remove)</p>
            </div>

            {/* Shipping */}
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            {/* Subtotal and Total */}
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>$99.00</span>
            </div>
            <div className="flex justify-between font-semibold text-[24px]">
              <span>Total</span>
              <span>$234.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
