import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Login} from './pages/login/login';
import {Feed} from './pages/feed/feed';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
