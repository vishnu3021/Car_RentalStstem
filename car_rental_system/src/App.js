import logo from './logo.svg';
import './App.css';
import Home from './Signup/Home/Home';
import CarsData from './CarsData/CarsData';
import{BrowserRouter as Router, Link ,Route,Routes} from "react-router-dom"
import Cards from './CarsData/Cards';







function App() {
  return (
    <div className="App">
      
      <Router>
       
       <div style={{display:"flex", justifyContent:"space-evenly"}}>

          <Link to="/home">Home</Link>
          <Link to="/cars">Cars</Link>
          {/* <Link to="/">Home</Link> */}
          <Link to="/cars">About </Link>
         
       </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cars" element={<CarsData/>}/>
          {/* <Route path="/cars/:id" element={<Cards carData={carData}/>}/> */}
         
        </Routes>
      </Router>
    
   
    </div>
  );
}

export default App;
