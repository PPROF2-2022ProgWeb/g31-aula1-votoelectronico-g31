package com.votoElectronico.votoBack.service;

import com.votoElectronico.votoBack.model.Login;
import com.votoElectronico.votoBack.model.Usuario;

import java.util.List;

public interface IUsuarioService {

    public List<Usuario> traerUsuarios();

    public void crearUsuario(Usuario pers);

    public void bajarUsuario(Long id);

    //public Usuario buscarUsuario(Login login);
}
