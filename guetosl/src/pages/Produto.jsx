function Produto() {
  return (
    <div className="container mt-5">
      <div className="row">

        {/* Imagem do Produto */}
        <div className="col-md-6 text-center">
          <div className="bg-secondary rounded" style={{height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <p className="text-white">Imagem do Produto</p>
          </div>
        </div>

        {/* Detalhes do Produto */}
        <div className="col-md-6">
          <h2>Nome do Produto</h2>
          <p className="text-muted">Categoria</p>
          <h4 className="fw-bold">R$ 99,90</h4>
          <p className="mt-3">Descrição do produto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          {/* Tamanhos */}
          <div className="mt-3">
            <p className="fw-bold">Tamanho:</p>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-dark">P</button>
              <button className="btn btn-outline-dark">M</button>
              <button className="btn btn-outline-dark">G</button>
              <button className="btn btn-outline-dark">GG</button>
            </div>
          </div>

          {/* Botões */}
          <div className="mt-4 d-flex gap-2">
            <button className="btn btn-dark w-100">Adicionar ao Carrinho</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Produto;