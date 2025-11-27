import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Usuarios from './pages/usuarios';
import PerfilUsuario from './pages/perfil';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/usuarios' element={<Usuarios />}></Route>
        <Route path='/usuarios/:id' element={<PerfilUsuario />}></Route>
      </Routes>
    </Router >
  );
}

export default App;
