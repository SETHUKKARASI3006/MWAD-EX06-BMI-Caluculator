import './App.css';
import Home from './Home';
import Calculator from './Calculator';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link> | <Link to="/calculator">Calculator</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/calculator' element={<Calculator />}/>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
