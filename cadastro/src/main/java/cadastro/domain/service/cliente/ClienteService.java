package cadastro.domain.service.cliente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import cadastro.domain.entity.cliente.Cliente;
import cadastro.domain.repository.cliente.IClienteRepository;

import java.util.List;
import java.util.Optional;

/**
 *
 */
@Service
public class ClienteService {
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	// Repositories
	/**
	 *
	 */
	@Autowired
	private IClienteRepository clienteRepository;

	private void validate(Cliente cliente) {
		Assert.hasText(cliente.getNome(), "O campo 'Nome' deve ser preenchido");
		Assert.hasText(cliente.getCpf(), "O campo 'CPF' deve ser preenchido");
		Optional<Cliente> clienteValidator = this.clienteRepository.findByCpf(cliente.getCpf());
		if (clienteValidator.isPresent()) {
			if (cliente.getId() == null) {
				Assert.isTrue(!clienteValidator.isPresent(), "CPF já cadastrado");
			} else {
				Assert.isTrue(cliente.getId().equals(clienteValidator.get().getId()), "CPF já cadastrado");
			}
		}

		Assert.notNull(cliente.getEndereco(), "O endereço não pode ser nulo");
		Assert.hasText(cliente.getEndereco().getPais(), "O campo 'País' deve ser preenchido");
		Assert.hasText(cliente.getEndereco().getEstado(), "O campo 'Estado' deve ser preenchido");
		Assert.hasText(cliente.getEndereco().getCidade(), "O campo 'Cidade' deve ser preenchido");
		Assert.hasText(cliente.getEndereco().getBairro(), "O campo 'Bairro' deve ser preenchido");
	}

	public ClienteService() {
	}

	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/

	/**
	 * @param cliente
	 * @return
	 */
	public Cliente save(Cliente cliente) {
		this.validate(cliente);
		cliente = this.clienteRepository.save(cliente);

		return cliente;
	}

	/**
	 *
	 */
	public Cliente update(Cliente cliente) {
		if (cliente.getId() == null) {
			return cliente;
		}
		this.validate(cliente);

		return this.clienteRepository.save(cliente);
	}

	/**
	 *
	 */
	public void delete(Long clienteId) {
		if (clienteId == null) {
			return;
		}
		this.clienteRepository.deleteById(clienteId);
	}

	/**
	 *
	 */
	@Transactional(readOnly = true)
	public Cliente findPessoaById(Long clienteId) {
		Cliente cliente = this.clienteRepository.findById(clienteId)
				.orElseThrow(() -> new RuntimeException("Cliente não encontrada"));

		return cliente;
	}

	/**
	 *
	 */
	@Transactional(readOnly = true)
	public List<Cliente> getAll() {
		List<Cliente> cliente = this.clienteRepository.findAll();

		return cliente;
	}
}