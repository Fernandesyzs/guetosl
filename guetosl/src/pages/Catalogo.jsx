function Catalogo() {
  return (
    <div className="container mt-5">
      
      <h2 className="text-center mb-4">Catálogo</h2>

      <div className="row">

        <div className="col-md-3 mb-4">
          <div className="card shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Produto 1</h5>
              <p className="text-muted">Categoria</p>
              <p className="fw-bold">R$ 99,90</p>
              <a href="/produto" className="btn btn-dark w-100">Ver Produto</a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Produto 2</h5>
              <p className="text-muted">Categoria</p>
              <p className="fw-bold">R$ 149,90</p>
              <a href="/produto" className="btn btn-dark w-100">Ver Produto</a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Produto 3</h5>
              <p className="text-muted">Categoria</p>
              <p className="fw-bold">R$ 199,90</p>
              <a href="/produto" className="btn btn-dark w-100">Ver Produto</a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Produto 4</h5>
              <p className="text-muted">Categoria</p>
              <p className="fw-bold">R$ 249,90</p>
              <a href="/produto" className="btn btn-dark w-100">Ver Produto</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Catalogo;