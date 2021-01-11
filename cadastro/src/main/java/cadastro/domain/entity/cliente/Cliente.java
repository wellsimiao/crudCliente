package cadastro.domain.entity.cliente;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import cadastro.domain.entity.endereco.Endereco;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table
public class Cliente {
    public Cliente() {
    }

    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(fetch = FetchType.LAZY)
    private Long id;

    @NotEmpty
    @NotNull
    @Column(length = 255)
    @Basic(fetch = FetchType.LAZY)
    private String nome;

    @NotEmpty
    @NotNull
    @Column(length = 255, unique = true)
    @Basic(fetch = FetchType.LAZY)
    private String cpf;

    @OneToOne(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
    private Endereco endereco;

    /**
     *
     */
    public void validateCliente()
    {

    }


    /*-------------------------------------------------------------------
     *				 		     GETTERS AND SETTERS
     *-------------------------------------------------------------------*/

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCrm(String cpf) {
        this.cpf = cpf;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }
}
