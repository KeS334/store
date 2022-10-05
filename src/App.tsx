import {Routes, Route} from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation";

function App() {
    return(
        <>
            <Navigation/>
            <Routes>
                <Route path={process.env.REACT_APP_ROOT_DIR} element={<ProductPage/>}/>
                <Route path={process.env.REACT_APP_ROOT_DIR + "/about"} element={<AboutPage/>}/>
            </Routes>
        </>
    )
}

export default App;