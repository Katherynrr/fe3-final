import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Footer from "./Components/Footer";
import { useContextDentGlo } from "./Components/Utils/global.context";

function App() {

const {themeState} = useContextDentGlo()
  

  return (
    <div className="App"  style={{backgroundColor: themeState.bgColor, color: themeState.color}}>
      <h1 style={{fontSize: themeState.fontSize}}> </h1>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>          
            <Route path='/contacto' element={<Contact/>}/>
            <Route path='/dent/:id' element={<Detail/>}/>
            <Route path='/favs' element={<Favs/>}/>
          </Routes>            
          <Footer/>       
    
      </div>
  );
}

export default App;
