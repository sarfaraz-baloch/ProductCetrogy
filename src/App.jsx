import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import './App.css'
import Home from './Componets/Home'
import Product from './Componets/Product'
import Layout from './Componets/Layout'
import Card from "./Componets/Card"
// import Card from "./Componets/Card";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/card" element={<Card />} />
      {/* <Route path="/card" element={<Card />} /> */}
    </Route>
    </Route>
  )
);

function App() {

  return (
  <RouterProvider router={router} />
      // <Route path="/" element={<Home/>}/>
      // <Route path="/product" element={<Product/>}/>
   
  )
}

export default App
