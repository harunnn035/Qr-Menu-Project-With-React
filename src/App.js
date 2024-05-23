import {Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home';
function App() {
  return (
    <div className="App">
      <Routes>
 <Route path='/' element={<Home/>}></Route>
 <Route path='/food'></Route>
 <Route path='/sign'></Route>
 <Route path='/order'></Route>
 <Route path='/menu'></Route>
</Routes>
    </div>
  );
}

export default App;
