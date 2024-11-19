import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import BlogHome from "./Components/Blog/BlogHome";

function App() {
  return (
      <Router>
        <div className="App">
            <Navbar/>
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
