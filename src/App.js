// import appCss from './styles/App.module.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Registration from './components/Registration';
import Error from './components/Error';
import Home from './components/Home';
import Category from './components/Category';
import Movies from './components/Movies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='/category' element={<Category></Category>}></Route>
        <Route path='/movies' element={<Movies></Movies>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
