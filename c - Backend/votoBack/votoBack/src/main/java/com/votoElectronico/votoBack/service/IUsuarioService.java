package com.votoElectronico.votoBack.service;

import com.votoElectronico.votoBack.model.Usuario;

import java.util.List;
import java.util.Optional;

public interface IUsuarioService {

    public List<Usuario> traerUsuarios();

    public void crearUsuario(Usuario pers);

    public void bajarUsuario(Long id);

    public void updateUser(Usuario pers);

    Optional<Usuario> findById(Long id);

    //public Usuario buscarUsuario(Login login);
}
