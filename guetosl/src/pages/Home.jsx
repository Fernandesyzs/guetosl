function Home() {
  return (
    <div>

      {/* Banner principal */}
     <div className="bg-dark text-white text-center d-flex flex-column align-items-center justify-content-center" style={{minHeight: '500px'}}>
        <h1>GuetoSL</h1>
        <p>As melhores roupas do estilo urbano</p>
        <a href="/catalogo" className="btn btn-light btn-lg">Ver Catálogo</a>
      </div>

      {/* Seção de destaques */}
      <div className="container mt-5">
        <div className="row">

          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Produto 1</h5>
                <p className="card-text">R$ 99,90</p>
                <a href="/produto" className="btn btn-dark">Ver Produto</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Produto 2</h5>
                <p className="card-text">R$ 149,90</p>
                <a href="/produto" className="btn btn-dark">Ver Produto</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Produto 3</h5>
                <p className="card-text">R$ 199,90</p>
                <a href="/produto" className="btn btn-dark">Ver Produto</a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;