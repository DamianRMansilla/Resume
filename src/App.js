import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Experience from "./Pages/Experience/Experience";
import Header from './Components/Header/header';
import Home from './Pages/Home/home';
import Knowledge from "./Pages/Knowledge/Knowledge";
import Error from "./Pages/404/404";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/Resume" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/knowledge" element={<Knowledge/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
