
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NewsDetails from './components/NewsDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/newsDetails' element={<NewsDetails/>}/>
      </Routes>
      {/* <Home/> */}
    </div>
  );
}

export default App;
