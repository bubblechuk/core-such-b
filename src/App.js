import logo from './logo.svg';
import './App.css';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Shop } from './shop/Shop';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Authorization } from './login/Login';

function App() {
  return (
    <div className="App">
     
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/login" element={<Authorization/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
