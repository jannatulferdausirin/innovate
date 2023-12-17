import './App.css'
import Banner from './components/Layouts/Banner'
import Blog from './components/Layouts/Blog'
import Creative from './components/Layouts/Creative'
import Footer from './components/Layouts/Footer'
import Navbar from './components/Layouts/Navbar'
import Review from './components/Layouts/Review'
import Service from './components/Layouts/Service'
import WhoWeAre from './components/Layouts/WhoWeAre'
import Work from './components/Layouts/work'

function App() {
 

  return (
    <>
   <Navbar/>
   <Banner/>
   <Service/>
   <WhoWeAre/>
   <Work/>
   <Creative/>
   <Review/>
   <Blog/>
   <Footer/>
    </>
  )
}

export default App
