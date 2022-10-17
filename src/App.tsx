import {Routes, Route} from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {
    return(
        <>
            <Header/>
             <Routes>
                <Route path="/store" element={<ProductPage/>}/>
                <Route path="/store/analytics" element={<AnalyticsPage/>}/>
                <Route path="/store/about" element={<AboutPage/>}/>
            </Routes>
        </>
    )
}

export default App;