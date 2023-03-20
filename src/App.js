
import {BrowserRouter  , Route, Routes} from 'react-router-dom'

// Components
import Navigation from './components/Navigation'
import Index from './components/Pages/Index'
import Food from './components/Pages/Food'
import Services from './components/Pages/Services'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <BrowserRouter>
        <Navigation />

        <Routes>
            <Route  path="/" element={<Index />} />
            <Route  path="/Food" element={<Food />} />
            <Route  path="/Services" element={<Services />} />
            <Route  path="/About-us" element={<About />} />
            <Route  path="/Contact-us" element={<Contact />} />
        </Routes>

        <Footer />
    </BrowserRouter>

  );
}

export default App;
