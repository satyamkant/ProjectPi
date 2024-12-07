import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import BlogHome from "./Components/Blog/BlogHome";
import {useEffect, useState} from "react";
import AuthService from "./Components/Controller/AuthService";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");

    const toggleIsAuthenticated = () => {
        setIsAuthenticated(!isAuthenticated);
    }

    useEffect( () => {
        const checkAuthenticated = async () =>{
            try {
                const response = await AuthService.IsAuthenticatedService();
                if (response.message === "Authenticated user") {
                    setIsAuthenticated(true);
                    setName(response.userDto.name);
                } else {
                    setIsAuthenticated(false);
                }
            }catch(error){
                console.log(error);
            }finally {
                setLoading(false);
            }
        };
        checkAuthenticated()
    },[])

    if(loading){
        return <LoadingScreen/>
    }

  return (
      <Router>
        <div className="App">
            <Navbar isAuthenticated={isAuthenticated} name={name} onAutheChange={toggleIsAuthenticated} />
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blog" element={<BlogHome />} />
            </Routes>
            <Footer/>
        </div>
      </Router>
  );
}

export default App;
