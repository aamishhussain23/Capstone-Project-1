import appCss from './styles/App.module.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Registration from './components/Registration';
import Error from './components/Error';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </Router>
  );
}

export default App;