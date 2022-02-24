import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Terms from './pages/Terms';
import Login from './pages/Login';
import Signup from './pages/Signup';

import Hoteldetail from './pages/Hoteldetail';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/faq' exact element={<Faq />} />
        <Route path='/terms' exact element={<Terms />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/signup' exact element={<Signup />} />

        <Route path='/hotel-detail' exact element={<Hoteldetail />} />
        <Route path='/checkout' exact element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
