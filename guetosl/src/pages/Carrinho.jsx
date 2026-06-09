function Carrinho() {
  return (
    <div className="container mt-5">
      
      <h2 className="mb-4">Meu Carrinho</h2>

      <div className="row">

        {/* Lista de Produtos */}
        <div className="col-md-8">
          <div className="card shadow mb-3">
            <div className="card-body d-flex align-items-center gap-3">
              
              <div className="bg-secondary rounded" style={{width: '80px', height: '80px', minWidth: '80px'}}></div>
              
              <div className="flex-grow-1">
                <h5 className="mb-1">Nome do Produto</h5>
                <p className="text-muted mb-1">Tamanho: M</p>
                <p className="fw-bold mb-0">R$ 99,90</p>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-outline-dark btn-sm">-</button>
                <span>1</span>
                <button className="btn btn-outline-dark btn-sm">+</button>
              </div>

              <button className="btn btn-danger btn-sm">Remover</button>

            </div>
          </div>
        </div>

        {/* Resumo do Pedido */}
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="mb-3">Resumo do Pedido</h5>
              <div className="d-flex justify-content-between">
                <p>Subtotal</p>
                <p>R$ 99,90</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Frete</p>
                <p>R$ 15,00</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <p>Total</p>
                <p>R$ 114,90</p>
              </div>
              <button className="btn btn-dark w-100 mt-2">Finalizar Pedido</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Carrinho;