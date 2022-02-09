import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {

  const user = useSelector((state)=>state.user.currentUser)

  return(
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="products" element={<ProductList />}>
            <Route path=":category" element={<ProductList />} />
            </Route>
            <Route path="/product/:id" element={<Product/>} />
            <Route path="/cart" element={<Cart/>} />
           
            {user ? <Route  path="/login"element={<Navigate to="/" />}/>: <Route path="/login" element={<Login/>} />}
            {user ? <Route  path="/register"element={<Navigate to="/" />}/>: <Route path="/register" element={<Register/>} />}
            <Route path="/success" element={<Success/>} />
              
     
          </Routes>
        </Router>
  );
};

export default App;