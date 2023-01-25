import { Route, Routes } from 'react-router-dom'

import './App.scss';
import Home from './components/Home/home';
import Layout from './components/Layout/layout';
import About from './components/About/about';
import Contact from './components/Contact/contact'
import Portfolio from './components/Portfolio/portfolio';
import Dashboard from './components/Dashboard'
import Books from './components/Books/books'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/books" element={<Books />} />

         
        </Route>
      </Routes>
    </>
  )
}

export default App