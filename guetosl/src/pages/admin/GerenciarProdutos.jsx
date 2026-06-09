function GerenciarProdutos() {
  return (
    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Gerenciar Produtos</h2>
        <button className="btn btn-dark">+ Adicionar Produto</button>
      </div>

      <table className="table table-bordered table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Produto 1</td>
            <td>Camiseta</td>
            <td>R$ 99,90</td>
            <td>15</td>
            <td className="d-flex gap-2">
              <button className="btn btn-warning btn-sm">Editar</button>
              <button className="btn btn-danger btn-sm">Excluir</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Produto 2</td>
            <td>Calça</td>
            <td>R$ 149,90</td>
            <td>8</td>
            <td className="d-flex gap-2">
              <button className="btn btn-warning btn-sm">Editar</button>
              <button className="btn btn-danger btn-sm">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default GerenciarProdutos;