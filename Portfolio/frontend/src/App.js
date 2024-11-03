import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Resume from "./Components/Resume";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Resume/>
        <Footer/>
    </div>
  );
}

export default App;
