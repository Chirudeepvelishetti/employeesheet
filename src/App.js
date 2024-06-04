

import LoginPage from './Screens/LoginPage';
import Register from './Screens/Register';
import Screen1 from './Screens/Screen1';
import Home from './Screens/Home';
import Edit from './Screens/Edit';
import { Route ,Routes } from 'react-router-dom';
import Adding from './Screens/Adding';
import Read from './Screens/Read';
function App() {
  return (
    <Routes>
    <Route path="/" element={<Screen1 />}></Route>
    <Route path="login" element={<LoginPage />}></Route>
    <Route path="register" element={<Register />}></Route>
    <Route path="home" element={<Home />}></Route>
   <Route path='add' element={<Adding />}></Route>
   <Route path='/edit/:id' element={<Edit />}></Route>
   <Route path='/read/:id' element={<Read />}></Route>
    </Routes>
  );
}

export default App;
