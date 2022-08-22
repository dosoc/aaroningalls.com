import './App.css';
import Profile from './components/profile'
import Login from './components/login'
import Golf from './components/golf'
import Projects from './components/projects'
import About from './components/about'

import { Link, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <header className='header'>
        <h2><Link to='/'>aaroningalls.com</Link></h2>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/golf'>Golf</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/golf' element={<Golf/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
