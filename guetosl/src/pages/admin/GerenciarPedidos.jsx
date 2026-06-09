function GerenciarPedidos() {
  return (
    <div className="container mt-5">

      <h2 className="mb-4">Gerenciar Pedidos</h2>

      <table className="table table-bordered table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Data</th>
            <th>Total</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>João Silva</td>
            <td>09/06/2026</td>
            <td>R$ 199,90</td>
            <td><span className="badge bg-warning text-dark">Pendente</span></td>
            <td>
              <button className="btn btn-dark btn-sm">Ver Detalhes</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Maria Souza</td>
            <td>09/06/2026</td>
            <td>R$ 349,90</td>
            <td><span className="badge bg-success">Entregue</span></td>
            <td>
              <button className="btn btn-dark btn-sm">Ver Detalhes</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Pedro Santos</td>
            <td>09/06/2026</td>
            <td>R$ 99,90</td>
            <td><span className="badge bg-primary">Em transporte</span></td>
            <td>
              <button className="btn btn-dark btn-sm">Ver Detalhes</button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default GerenciarPedidos;