import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Home } from './views/pages/Home';
import { Private } from './views/pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { useContext } from 'react';
import { AuthContext } from './contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    navigate('/');
  }

  return (
    <div className="App">
      <header>
        <h1>Header do Site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/painel">Página Privada</Link>
          {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          { auth.user && <a href="" onClick={ handleLogout }>Sair</a> }
        </nav>
      </header>
      <hr/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/painel" element={<RequireAuth><Private/></RequireAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
