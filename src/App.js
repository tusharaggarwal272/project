import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import Home from './pages/Home';
import NewCourse from './pages/NewCourse';
import NewSection from './pages/NewSection';
import MenuBar from './Components/MenuBar'
import Dashboard from './pages/Dashboard'
import Owner from './pages/Owner'
import { Box } from '@mui/system';
import Courses from './pages/Courses';
import Collection from './pages/Collection'
import Users from './pages/Users'
import NewCollection from './pages/NewCollection'
import CollectionSubPage from './pages/CollectionSubPage'
import FrontPage from './pages/FrontPage'

function App() {
  const user = localStorage.getItem('user');

  // if (!user) {
  //   return <Login />
  // }
  return (

    // <Box className="App" sx={{ display: 'flex', width: '100%', height: '100%' }}>
    <BrowserRouter>


      {/* <Box sx={{ position: 'absolute', width: '20%', height: '100%', left: '0%' }}>
          <MenuBar />
        </Box> */}
      {/* <Box sx={{ position: 'absolute', width: '85%', right: '0%' }} > */}

      <Route path={'/'} exact component={FrontPage} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path='/home' exact component={Home} />
      <Route path='/admin/content/courses/new' exact component={NewCourse} />
      <Route path="/admin/content/courses/new/:samplename" exact component={NewSection} />
      <Route path='/admin/content/collections/new' exact component={NewCollection} />
      <Route path="/admin/content/collections/new/:samplename" exact component={CollectionSubPage} />
      <Route path='/dashboard' exact component={Dashboard} />
      <Route path="/owner" exact component={Owner} />
      <Route path="/courses" exact component={Courses} />
      <Route path="/collection" exact component={Collection} />
      <Route path="/users" exact component={Users} />
      {/* </Box> */}
    </BrowserRouter >
    // </Box>

    // <div className="App">

    // </div>
  );
}

export default App;
