package guetosl.produto;

import org.springframework.stereotype.Service;
import java.util.List;

// Indica ao Spring que essa classe contém regras/lógica do sistema.
@Service
public class ProdutoService {

    // Repository responsável por acessar os dados de Produto no banco.
    private final ProdutoRepository produtoRepository;

    // O Spring fornece automaticamente o ProdutoRepository aqui.
    public ProdutoService(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    // Busca todos os produtos cadastrados no banco.

    public List<Produto> listar() {
        return produtoRepository.findAll();

    }

    //  Busca um produto específico pelo ID.
    public Produto buscarPorId(Integer id){

        // Procura o produto no banco pelo ID.
        return produtoRepository.findById(id)
                .orElseThrow(() -> new ProdutoNaoEncontradoException("Produto não encontrado"));

    }

    // Salva um novo produto no banco de dados.
    public Produto salvar(Produto produto) {
        return produtoRepository.save(produto);
    }

    public Produto atualizar(Integer id, Produto produto) {

        // Procura no banco o produto que possui o ID recebido.
        Produto produtoExistente = produtoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

        // Atualizar os dados do produto encontrado.

        produtoExistente.setNome(produto.getNome());
        produtoExistente.setDescricao(produto.getDescricao());
        produtoExistente.setPreco(produto.getPreco());
        produtoExistente.setTamanho(produto.getTamanho());
        produtoExistente.setCor(produto.getCor());
        produtoExistente.setEstoque(produto.getEstoque());
        produtoExistente.setCategoria(produto.getCategoria());

        // Salvar o produto atualizado no banco.
        return produtoRepository.save(produtoExistente);
    }

    // Exclui um produto pelo ID.
    public void deletar(Integer id) {

        // Procura e exclui o produto que possui esse ID.
        produtoRepository.deleteById(id);
    }

}
