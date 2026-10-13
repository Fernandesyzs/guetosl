package guetosl.service;

import guetosl.model.entity.Produto;
import guetosl.excecao.ProdutoNaoEncontradoException;
import guetosl.model.repository.ProdutoRepository;
import guetosl.model.repository.ImagemRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProdutoService {

    private final ProdutoRepository produtoRepository;
    private final ImagemRepository imagemRepository;

    // O Spring fornece os repositórios necessários para o serviço.
    public ProdutoService(
            ProdutoRepository produtoRepository,
            ImagemRepository imagemRepository
    ) {
        this.produtoRepository = produtoRepository;
        this.imagemRepository = imagemRepository;
    }

    // Retorna todos os produtos cadastrados no banco.
    public List<Produto> listar() {
        return produtoRepository.findAll();
    }

    // Busca um produto pelo ID ou informa que ele não existe.
    public Produto buscarPorId(Integer id) {
        return produtoRepository.findById(id)
                .orElseThrow(() ->
                        new ProdutoNaoEncontradoException(
                                "Produto não encontrado"
                        )
                );
    }

    // Cadastra um novo produto no banco.
    public Produto salvar(Produto produto) {
        return produtoRepository.save(produto);
    }

    // Atualiza os dados de um produto já cadastrado.
    public Produto atualizar(Integer id, Produto produto) {

        // Primeiro, procura o produto que será atualizado.
        Produto produtoExistente = produtoRepository.findById(id)
                .orElseThrow(() ->
                        new ProdutoNaoEncontradoException(
                                "Produto não encontrado"
                        )
                );

        // Substitui os dados antigos pelos novos.
        produtoExistente.setNome(produto.getNome());
        produtoExistente.setDescricao(produto.getDescricao());
        produtoExistente.setPreco(produto.getPreco());
        produtoExistente.setTamanho(produto.getTamanho());
        produtoExistente.setCor(produto.getCor());
        produtoExistente.setEstoque(produto.getEstoque());
        produtoExistente.setCategoria(produto.getCategoria());

        // Salva as alterações no banco.
        return produtoRepository.save(produtoExistente);
    }


    // Exclui a imagem relacionada antes de excluir o produto.
    @Transactional
    public void deletar(Integer id) {

        // Verifica se o produto existe.
        Produto produto = produtoRepository.findById(id)
                .orElseThrow(() ->
                        new ProdutoNaoEncontradoException(
                                "Produto não encontrado"
                        )
                );

        // Procura uma imagem associada ao produto.
        imagemRepository.findByProdutoId(id).ifPresent(imagem -> {

            // Limpa a referência do produto à imagem na memória.
            produto.setImagem(null);

            // Exclui a imagem e sincroniza essa alteração com o banco.
            imagemRepository.delete(imagem);
            imagemRepository.flush();
        });

        // Depois, exclui o produto.
        produtoRepository.delete(produto);
    }

}