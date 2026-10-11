
package guetosl.model.repository;

import guetosl.model.entity.Imagem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ImagemRepository extends JpaRepository<Imagem, Integer> {

    // Procura a imagem associada ao ID de um produto.
    Optional<Imagem> findByProdutoId(Integer produtoId);
}