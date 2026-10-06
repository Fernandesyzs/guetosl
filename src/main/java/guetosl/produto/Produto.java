package guetosl.produto;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


import java.math.BigDecimal;

// @Entity diz para o JPA que essa classe representa uma entidade do banco de dados.
@Entity

// @Table informa qual tabela do SQL Server essa classe representa.
@Table(name = "Produto", schema = "dbo")
public class Produto {

    // Identifica o campo que representa a chave primária da tabela.
    @Id
    // O banco será responsável por gerar o próximo ID automaticamente.
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    // Esses atributos representam as colunas da tabela Produto.
    private String nome;
    private String descricao;
    private BigDecimal preco;
    private String tamanho;
    private String cor;
    private Integer estoque;

    @ManyToOne
   @JoinColumn(name = "categoria_id")
    private Categoria categoria;


    public Integer getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public String getTamanho() {
        return tamanho;
    }

    public String getCor() {
        return cor;
    }

    public Integer getEstoque() {
        return estoque;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    // Setter do produto

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }

    public void setTamanho(String tamanho) {
        this.tamanho = tamanho;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public void setEstoque(Integer estoque) {
        this.estoque = estoque;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
    
}
