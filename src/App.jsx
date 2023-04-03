import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Home";
import Detail from "./Routes/Home";
import Favs from "./Routes/Home";
import Footer from "./Components/Footer";



function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>          
            <Route path='/contacto' element={<Contact/>}/>
            <Route path='/dentista' element={<Detail/>}/>
            <Route path='/favs' element={<Favs/>}/>
          </Routes>
          
          <Footer/>
      </div>
  );
}

export default App;
