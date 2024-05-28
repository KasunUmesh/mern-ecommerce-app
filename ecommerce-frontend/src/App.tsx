import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/layout/Header'
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import Footer from './components/layout/Footer'

function App() {
  

  return (
    <main className='text-[#222222]'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/clothing' element={<Category/>}/>
          <Route path='/cosmetics' element={<Category/>}/>
          <Route path='/electronics' element={<Category/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </main>
  )
}

export default App
