import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css'
import HomePage from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
