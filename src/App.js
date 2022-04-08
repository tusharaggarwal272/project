import './App.css';
import SignUp from './SignUp';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (


    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={[<Login />]} />
          <Route path="/signup" element={[<SignUp />]} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
