package cadastro.domain.repository.cliente;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import cadastro.domain.entity.cliente.Cliente;

import java.util.Optional;

/**
 *
 */
public interface IClienteRepository extends JpaRepository<Cliente, Long> {

    /**
     *
     */
    @Query("FROM Cliente cliente WHERE cliente.cpf = :cpf")
    Optional<Cliente> findByCpf(@Param("cpf") String cpf);

}
