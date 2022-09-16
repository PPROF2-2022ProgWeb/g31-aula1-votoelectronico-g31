package com.votoElectronico.votoBack.service;

import com.votoElectronico.votoBack.model.Usuario;
import com.votoElectronico.votoBack.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public Usuario buscarUsuario(Long id) {
        return usuarioRepo.findById(id).orElse(null);
    }

}
