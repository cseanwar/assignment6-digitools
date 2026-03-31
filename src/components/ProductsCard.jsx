import { useState } from "react";
import { toast } from "react-toastify";


const ProductsCard = ({ product, cartItems, setCartItems }) => {
const [isBought, setIsBought] = useState(false);
const handleBuyNow = () => {
    const isAlreadyInCart = cartItems.find((item) => item.id === product.id);
    if (!isAlreadyInCart) {
        setIsBought(!isBought);
        setCartItems([...cartItems, product]);
        toast.success("Item added to cart successfully!");
    } else {
        toast.error("Item is already in the cart!");
    }
};


  return (
    <div className="border border-zinc-100 rounded-2xl shadow-lg overflow-hidden mx-2 p-6">
      <div className="relative w-15 h-15 rounded-full border border-[#F2F2F2] flex items-center justify-center mb-4">
        <span className="text-[32px]">{product.icon}</span>

        {product.tagType && (
          <div
            className={`absolute -top-4 -right-74 px-4 py-1.5 text-xs font-semibold rounded-full uppercase tracking-wider
                                        ${product.tagType === "new" ? "bg-[#DBFCE7] text-[#0A883E]" : ""}
                                        ${product.tagType === "popular" ? "bg-[#E1E7FF] text-[#4f39f6]" : ""}
                                        ${product.tagType === "best-seller" ? "bg-[#FEF3C6] text-[#BB4D00]" : ""}
                                    `}
          >
            {product.tagType === "new" && "New"}
            {product.tagType === "popular" && "Popular"}
            {product.tagType === "best-seller" && "Best Seller"}
          </div>
        )}
      </div>
      <div className="space-y-4">
        <h3 className="font-bold text-[#101727] text-2xl">{product.name}</h3>
        <p className="text-[#627382] text-base">{product.description}</p>
        <div className="flex items-baseline gap-1">
          <p className="text-2xl font-bold text-[#101727]">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-sm text-[#627382]">/{product.period}</p>
        </div>
        <ul className="mt-4 space-y-2">
          {product.features.map((feature, index) => (
            <li className="flex gap-2" key={index}>
              <img src="/Check.png" alt="" /> {feature}
            </li>
          ))}
        </ul>
        <button onClick={handleBuyNow}
          className="w-full mt-4 cursor-pointer bg-linear-to-r from-[#4f39f6] to-[#9514fa] transition-all font-bold py-2 rounded-full text-[#FFFFFF] text-base shadow-lg"
        > {isBought ? "Added to Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
