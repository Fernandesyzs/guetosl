
package guetosl.service;

import guetosl.model.entity.Cliente;
import guetosl.model.repository.ClienteRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

    private final ClienteRepository clienteRepository;
    private final BCryptPasswordEncoder passwordEncoder =
            new BCryptPasswordEncoder();

    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    public Cliente cadastrar(Cliente cliente, String senha) {
        if (clienteRepository.existsByEmail(cliente.getEmail())) {
            throw new IllegalArgumentException(
                    "Este e-mail já está cadastrado."
            );
        }

        cliente.setSenhaHash(passwordEncoder.encode(senha));

        return clienteRepository.save(cliente);
    }
}
