import { toast } from "react-toastify";
import cartIcon from "../assets/products/shoppingCart.jpg";
import { Trash } from "lucide-react";

const Cart = ({ cartItems, setCartItems }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id) => {
    const filteredCarts = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredCarts);
    toast.success("Item removed from cart successfully!");
  };

  return (
    <div className="container mx-auto border border-zinc-100 rounded-2xl shadow-md overflow-hidden p-10 mb-30 space-y-6">
      <h2 className="font-bold text-2xl text-[#101727]">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <img className="w-30 h-30 opacity-20" src={cartIcon} alt="Empty Cart" />
          <h2 className="text-[#627382]">Your Cart is Empty</h2>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center gap-4 border border-zinc-100 bg-[#F9FAFC] rounded-2xl p-4"
            >
              <div className="flex gap-2.5">
                <div className="w-15 h-15 rounded-full border border-[#F2F2F2] bg-[#FFFFFF] flex items-center justify-center">
                  <span className="text-[32px]">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl text-[#101727]">
                    {item.name}
                  </h3>
                  <p className="text-[#627382] text-base">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>

              <button className="btn flex items-center gap-1 text-[#FF3980] text-sm font-bold rounded-full" onClick={() => handleRemove(item.id)} >
                <Trash className="w-5 h-5 hover:text-red-500" />Remove
              </button>
            
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-between">
        <p className="text-base text-[#627382]">Total:</p>
        <h2 className="font-bold text-2xl text-[#101727]">
          ${totalPrice.toFixed(2)}
        </h2>
      </div>

      <button onClick={() => {
                setCartItems([])
                toast.success("Payment successful!")
            }} className="w-full py-3 bg-linear-to-r from-[#4f39f6] to-[#9514fa] transition-all font-bold rounded-full text-[#FFFFFF] text-base shadow-lg cursor-pointer">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
