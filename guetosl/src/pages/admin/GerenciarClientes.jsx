function GerenciarClientes() {
  return (
    <div className="container mt-5">

      <h2 className="mb-4">Gerenciar Clientes</h2>

      <table className="table table-bordered table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Data de Cadastro</th>
            <th>Pedidos</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>João Silva</td>
            <td>joao@email.com</td>
            <td>01/06/2026</td>
            <td>3</td>
            <td>
              <button className="btn btn-dark btn-sm">Ver Detalhes</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Maria Souza</td>
            <td>maria@email.com</td>
            <td>05/06/2026</td>
            <td>1</td>
            <td>
              <button className="btn btn-dark btn-sm">Ver Detalhes</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Pedro Santos</td>
            <td>pedro@email.com</td>
            <td>08/06/2026</td>
            <td>2</td>
            <td>
              <button className="btn btn-dark btn-sm">Ver Detalhes</button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default GerenciarClientes;