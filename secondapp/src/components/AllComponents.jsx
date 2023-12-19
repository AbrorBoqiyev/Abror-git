import { useLocation, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import About from "./About";
import Home from "./Home";

function Allcomponents(props) {
    const location = useLocation()

    return ( 
        <>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<About />}/>
                    <Route path="about" element={<About />} />
                    <Route path="home" element={<Home/>}/>
                </Route>
            </Routes>
        </>
     );
}

export default Allcomponents;