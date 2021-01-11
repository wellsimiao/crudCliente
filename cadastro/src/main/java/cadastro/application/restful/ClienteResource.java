package cadastro.application.restful;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import cadastro.domain.entity.cliente.Cliente;
import cadastro.domain.service.cliente.ClienteService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/cliente")
public class ClienteResource {

	/*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/

	/**
	 *
	 */
	@Autowired
	private ClienteService clienteService;

	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTOR
	 *-------------------------------------------------------------------*/

	public ClienteResource() {
	}

	/*-------------------------------------------------------------------
	 * 		 					RESOURCES
	 *-------------------------------------------------------------------*/

	/**
	 * @return
	 */
	@PostMapping("/add")
	public Cliente adicionar(@RequestBody Cliente cliente) {
		try {
			return clienteService.save(cliente);
		} catch (Exception exc) {
			throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, exc.getMessage(), exc);
		}
	}

	/**
	 * @return
	 */
	@DeleteMapping("/delete/{id}")
	// @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public void deletar(@PathVariable("id") Long id) {
		try {
			clienteService.delete(Long.valueOf(id));
		} catch (Exception exc) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, exc.getMessage(), exc);
		}
	}

	/**
	 * @return
	 */
	@PostMapping("/update")
	public Cliente editar(@RequestBody Cliente cliente) {
		try {
			return clienteService.update(cliente);
		} catch (Exception exc) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, exc.getMessage(), exc);
		}
	}

	/**
	 * @return
	 */
	@GetMapping("")
	public List<Cliente> findAll() {
		try {
			return clienteService.getAll();
		} catch (Exception exc) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, exc.getMessage(), exc);
		}
	}

}
