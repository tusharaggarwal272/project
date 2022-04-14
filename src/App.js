import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path='/home' exact component={Home}/>
        </BrowserRouter>
      </div>
  );
}

export default App;
