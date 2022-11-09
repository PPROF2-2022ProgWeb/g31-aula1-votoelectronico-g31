package com.votoElectronico.votoBack.service;

import com.votoElectronico.votoBack.model.Usuario;
import com.votoElectronico.votoBack.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService implements IUsuarioService{

    @Autowired
    public UsuarioRepository usuarioRepo;

    @Override
    public List<Usuario> traerUsuarios() {
        return usuarioRepo.findAll();
    }

    @Override
    public void crearUsuario(Usuario usuario) {
        usuarioRepo.save(usuario);
    }

    @Override
    public void bajarUsuario(Long id) {
        usuarioRepo.deleteById(id);
    }

    @Override
    public void updateUser(Usuario usuario) {
        usuarioRepo
                .findById(usuario.getId()) // returns Optional<User>
                .ifPresent(user1 -> {
                    user1.setNombre(usuario.getNombre());
                    user1.setApellido(usuario.getApellido());
                    user1.setDni(usuario.getDni());
                    user1.setEmail(usuario.getEmail());
                    user1.setPassword(usuario.getPassword());
                    user1.setTelefono((usuario.getTelefono()));

                    usuarioRepo.save(usuario);
                });
    }

    @Override
    public Optional<Usuario> findById(Long id) {
        return usuarioRepo.findById(id);
    }


    //@Override
    //public Usuario buscarUsuario(Login login) {
      //  return usuarioRepo.findByEmailAndPassword(login.email, login.password);
    //}

}
