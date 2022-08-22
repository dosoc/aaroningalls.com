import './App.css';
import Profile from './components/profile'
import Login from './components/login'
import Golf from './components/golf'
import { Link, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <header className='header'>
        <h2>aaroningalls.com</h2>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/store'>Shop</Link></li>
            <li><Link to='/golf'>Golf</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='golf' element={<Golf/>}/>
      </Routes>
    </div>
  );
}

export default App;
