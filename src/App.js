import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Product/Product";
import ProjectsHome from "./Components/Project/ProjectsHome";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ProductHome from "./Components/Product/ProductHome";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import OngoingProjects from './Components/OngoingProjects/OngoingProjects';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'/products'} element={<ProductHome/>}></Route>
                <Route path={'/product'} element={<Product/>}></Route>
                <Route path={'/projects'} element={<ProjectsHome/>}></Route>
                <Route path={'/login'} element={<Login/>}></Route>
                <Route path={'/signup'} element={<SignUp/>}></Route>
                <Route path={'/aboutus'} element={<AboutUs/>}></Route>
                <Route path={'/contactus'} element={<ContactUs/>}></Route>
                <Route path={'/ongoingprojects'} element={<OngoingProjects/>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
