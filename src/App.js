import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Signin from './components/Signin';
import Signup from './components/Signup';
import  Notfound  from './components/Notfound';
import Navbar from './components/Navbar';
import Getjersey from './components/Getjersey';
import Addjersey from './components/Addjersey';
import AboutUs from './components/Aboutus';
import Makepayment from './components/Makepayment';

function App() {
  return (
   <Router>
     <div className="App">
      {/* <header className="App-header">
       <h1>Surreal Jerseys</h1>
      </header> */}
      <Navbar/>
      

      {/* create the different urls to the component */}
      <Routes>
        <Route path='/' element={<Getjersey/>}/>
        <Route path='/addjersey' element={<Addjersey/>}/>
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/aboutus'element={<AboutUs/>}/>
        <Route path='/makepayment' element={<Makepayment/>}/>
        <Route path='/*' element={<Notfound/>}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;

// npm install bootstrap
//  ''   ''    axios
//  ''   ''     react-router-dom