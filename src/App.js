import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Counter from './Pages/Counterapp/Counter';
import User from './Pages/Userinfo/User';
import Navbar from './Pages/Component/Navbar';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes >
          <Route path='/' element={<Counter />}  />
          <Route path='/user' element={<User />}  />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
