function Dashboard() {
  return (
    <div className="container mt-5">
      
      <h2 className="mb-4">Dashboard</h2>

      {/* Cards de resumo */}
      <div className="row mb-5">

        <div className="col-md-3">
          <div className="card shadow text-center p-3">
            <h6 className="text-muted">Total de Produtos</h6>
            <h3 className="fw-bold">24</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow text-center p-3">
            <h6 className="text-muted">Pedidos Hoje</h6>
            <h3 className="fw-bold">8</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow text-center p-3">
            <h6 className="text-muted">Clientes Cadastrados</h6>
            <h3 className="fw-bold">132</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow text-center p-3">
            <h6 className="text-muted">Faturamento do Mês</h6>
            <h3 className="fw-bold">R$ 4.280</h3>
          </div>
        </div>

      </div>

      {/* Atalhos */}
      <h5 className="mb-3">Atalhos</h5>
      <div className="d-flex gap-3">
        <a href="/admin/produtos" className="btn btn-dark">Gerenciar Produtos</a>
        <a href="/admin/pedidos" className="btn btn-dark">Gerenciar Pedidos</a>
        <a href="/admin/clientes" className="btn btn-dark">Gerenciar Clientes</a>
      </div>

    </div>
  );
}

export default Dashboard;