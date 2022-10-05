import {Routes, Route} from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation";

function App() {
    return(
        <>
            <Navigation/>
            <Routes>
                <Route path="/store" element={<ProductPage/>}/>
                <Route path="/store/about" element={<AboutPage/>}/>
            </Routes>
        </>
    )
}

export default App;