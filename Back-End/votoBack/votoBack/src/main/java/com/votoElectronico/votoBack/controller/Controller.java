package com.votoElectronico.votoBack.controller;

import com.votoElectronico.votoBack.model.Usuario;
import com.votoElectronico.votoBack.service.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class Controller {
    @Autowired
    private IUsuarioService usuServi;


    @PostMapping("/agregar")
    public void agregarUsuario(@RequestBody Usuario usuario){
        usuServi.crearUsuario(usuario);
    }

    @GetMapping("/ver/usuarios")
    @ResponseBody
    public List<Usuario> verPersonas(){
        return usuServi.traerUsuarios();
    }

    @DeleteMapping("/delete/{id}")
    public void bajarUsuario(@PathVariable Long id){
        usuServi.bajarUsuario(id);
    }
}
