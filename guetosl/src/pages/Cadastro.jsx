function Cadastro() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{minHeight: '90vh'}}>
      <div className="card p-4 shadow" style={{width: '400px'}}>
        
        <h2 className="text-center mb-4">Cadastre-se</h2>

        <div className="mb-3">
          <label className="form-label">Nome completo</label>
          <input type="text" className="form-control" placeholder="Digite seu nome" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Digite seu email" />
        </div>

        <div className="mb-3">
          <label className="form-label">Senha</label>
          <input type="password" className="form-control" placeholder="Digite sua senha" />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirmar Senha</label>
          <input type="password" className="form-control" placeholder="Confirme sua senha" />
        </div>

        <button className="btn btn-dark w-100 mt-2">Cadastrar</button>

        <p className="text-center mt-3">
          Já tem conta? <a href="/login">Entrar</a>
        </p>

      </div>
    </div>
  );
}

export default Cadastro;