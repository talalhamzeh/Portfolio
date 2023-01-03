import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import Layout from './components/Layout/layout';
import About from './components/About/about';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
         
        </Route>
      </Routes>
    </>
  )
}

export default App