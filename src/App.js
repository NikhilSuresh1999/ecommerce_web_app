import logo from './logo.svg';
import './App.css';
import Navigation from './Customers/Components/Navigation/Navigation';
import HomePage from './Customers/Components/Pages/HomePages/HomePage';
import Footer from './Customers/Components/Footer/Footer';
import Products from './Customers/Components/Products/Products';
import ProductDetails from './Customers/Components/ProductDetails/ProductDetails';
import Cart from './Customers/Components/Cart/Cart';
import Checkout from './Customers/Components/Checkout/Checkout';
import Order from './Customers/Components/Order/Order';
import OrderDetails from './Customers/Components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouter from './Routers/CustomerRouter';



function App() {
  return (
    <div>
      <div>
      

      </div>

      <Routes>
        <Route path='/*' element={<CustomerRouter/>}>

        </Route>


      </Routes>

      
    <div>
   
    </div>

    
    </div>
  );
}

export default App;
