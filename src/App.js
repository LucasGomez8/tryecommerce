import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './containers/home/home';
import Layout from './containers/home/layout/layout';
import Products from './containers/products/products';
import ShopCart from './containers/ShopCart/ShopCart';
import UseCont from './context/useCont';

function App() {
  return (
    <BrowserRouter>
      <UseCont>
        <Layout>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/cart' element={<ShopCart></ShopCart>}></Route>
            <Route path='/products' element={<Products></Products>}></Route>
          </Routes>
        </Layout>
      </UseCont>
    </BrowserRouter>
  );
}

export default App;
