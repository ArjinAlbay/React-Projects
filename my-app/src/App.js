import { Routes, Route, Link } from "react-router-dom";
import AboutPage from "./routerSample/AboutPage";
import ContactPage from "./routerSample/ContactPage";
import HomePage from "./routerSample/HomePage";
import NoMatch from "./routerSample/NoMatch";
import ProductDetail from "./routerSample/ProductDetail";
import ProductList from "./routerSample/ProductList";
import DataDisplay from "./materialSample/DataDisplay";
import ProductDataGrid from "./materialSample/ProductDataGrid";
import AutocompleteSample from "./materialSample/AutocompleteSample";
import { useContext } from "react";
import { cartContext } from "./store/CartContext";
import CartPage from "./routerSample/CartPage";

function App() {
  const { cart, setCart } = useContext(cartContext);
  let totalPrice= 0

  cart.forEach(element => {
    totalPrice = totalPrice + (element.price * element.quantity)
    
  });
  return (
    <>
      <h1> site header </h1>
      <h1> Cart count: {cart.length} </h1>
    <h1> Total Price =  {totalPrice.toFixed(2)}</h1>
    

      <ul>
        <li>
          <Link to="/">home </Link>
        </li>
        <li>
          <Link to="/hakkimizda">about </Link>
        </li>
        <li>
          <Link to="/iletisim">contact </Link>
        </li>
        <li>
          <Link to="/urunler">urunler </Link>
        </li>

        <li>
          <Link to="/datadisplay"> datadisplay</Link>
        </li>
        <li>
          <Link to="/producttable">producttable</Link>
        </li>
        <li>
          <Link to="/autocomplate">autocomplate</Link>
        </li>

        <li>
          <Link to="/cart">cart</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/hakkimizda" element={<AboutPage />}></Route>
        <Route path="/iletisim" element={<ContactPage />}></Route>
        <Route path="/urunler" element={<ProductList />}></Route>
        <Route path="/urunler/:id" element={<ProductDetail />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
        <Route path="/datadisplay" element={<DataDisplay />}></Route>

        <Route
          path="/producttable"
          element={<ProductDataGrid></ProductDataGrid>}
        ></Route>
        <Route
          path="/autocomplate"
          element={<AutocompleteSample></AutocompleteSample>}
        ></Route>

        <Route path="/cart" element={<CartPage></CartPage>}></Route>
      </Routes>
      <h1> site footer </h1>
    </>
  );
}

export default App;
