import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import PagesNav from './components/PagesNav';

function App() {
  return (
    <BrowserRouter>
      <h1>Palestine</h1>
      <PagesNav></PagesNav>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
