import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUser from './AddUser';
import UpdateUser from './updateUser';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<AddUser />}></Route>
          <Route path="/update/:id" element={<UpdateUser />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
