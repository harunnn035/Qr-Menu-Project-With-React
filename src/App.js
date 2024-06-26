import {Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Food from './pages/food/Food';
import Order from './pages/order/Order';
import './styles/global.scss';
import './styles/main.scss';
import Header from "./components/header/header/Header";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
 <Route path='/' element={<Home/>}></Route>
 <Route path='/food'  element={<Food/>}></Route>

 <Route path='/order' element={<Order/>}></Route>

</Routes>
    </div>
  );
}

export default App;
