import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product A", price: 500, quantity: 1 },
    { id: 2, name: "Product B", price: 300, quantity: 2 },
    { id: 3, name: "Product C", price: 200, quantity: 1 },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="max-w-4xl min-w-[350px] mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between py-4"
              >
                <div className="flex items-center space-x-4">
                  <div>
                    <h3 className="font-bold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">₹{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    className="px-2 py-1 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-gray-800 font-bold">
                    ₹{item.price * item.quantity}
                  </p>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <h3 className="text-xl font-bold text-gray-800">
              Total: ₹{calculateTotal()}
            </h3>
            <button className="px-6 py-2 bg-[#ff8800] text-white font-medium rounded-lg hover:bg-[#ff8800] transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
