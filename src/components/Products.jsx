import React, { use } from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ productPromise, cartItems, setCartItems }) => {
  const products = use(productPromise);
  console.log(products);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 pb-30">
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} cartItems={cartItems} setCartItems={setCartItems} />
      ))}
    </div>
  );
};

export default Products;
