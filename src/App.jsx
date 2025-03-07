import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sport from './pages/sports/Sports'
import Horses from './pages/horses/Horses'
import Casino from './pages/casino/Casino'




const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='sports' element={<Sport/>}/>
        <Route path='horses' element={<Horses/>}/>
        <Route path='casino' element={<Casino/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App