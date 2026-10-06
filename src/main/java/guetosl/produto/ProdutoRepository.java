package guetosl.produto;

import org.springframework.data.jpa.repository.JpaRepository;

// Repository responsável pelo acesso aos dados de Produto.
public interface ProdutoRepository extends JpaRepository<Produto, Integer> {

}