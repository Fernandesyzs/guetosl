import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Produto from './pages/Produto';
import Carrinho from './pages/Carrinho';
import Login from './pages/Login';

import Dashboard from './pages/admin/Dashboard';
import GerenciarProdutos from './pages/admin/GerenciarProdutos';
import GerenciarPedidos from './pages/admin/GerenciarPedidos';
import GerenciarClientes from './pages/admin/GerenciarClientes';

import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        {/* Páginas do Cliente */}
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/login" element={<Login />} />

        {/* Páginas do Admin */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/produtos" element={<GerenciarProdutos />} />
        <Route path="/admin/pedidos" element={<GerenciarPedidos />} />
        <Route path="/admin/clientes" element={<GerenciarClientes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;