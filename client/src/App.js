import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<div><h2>Welcome to SkillSync</h2></div>} />
      </Routes>
    </Router>
  );
}

export default App;