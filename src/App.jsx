import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Ratings from './components/Ratings'
import StepsCards from './components/StepsCards'
import TransformSection from './components/TransformSection'
import Cart from './components/Cart'
import Products from './components/Products'

const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const productPromise = getProducts();

function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
     <Navbar cartItems={cartItems} />
     <Banner />
     <Ratings />

     <div className="pt-30 pb-10 space-y-4">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <h2 className="font-extrabold text-5xl text-[#101727]">Premium Digital Tools</h2>
            <p className="text-base text-[#627382]">
              Choose from our curated collection of premium digital products
              designed <br /> to boost your productivity and creativity.
            </p>
          </div>
        </div>
        <div className="tabs justify-center bg-transparent ">
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full font-bold w-30 ${activeTab === "product" && "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-[#FFFFFF]"}`}
            aria-label="Products"
            defaultChecked
            onClick={() => setActiveTab("product")}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full font-bold w-30 ${activeTab === "cart" && "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-[#FFFFFF]"}`}
            aria-label={`Cart (${cartItems.length})`}
            onClick={() => setActiveTab("cart")}
          />
        </div>
      </div>

      {activeTab === "product" && <Products productPromise={productPromise} cartItems={cartItems} setCartItems={setCartItems} />}
      {activeTab === "cart" && <Cart cartItems={cartItems} setCartItems={setCartItems} />}
     
     
     <StepsCards />
     <Pricing />
     <TransformSection />
     <Footer />
    </>
  )
}

export default App
