import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Ratings from './components/Ratings'
import StepsCards from './components/StepsCards'
import TransformSection from './components/TransformSection'

function App() {

  return (
    <>
     <Navbar />
     <Banner />
     <Ratings />
     <StepsCards />
     <Pricing />
     <TransformSection />
    </>
  )
}

export default App
