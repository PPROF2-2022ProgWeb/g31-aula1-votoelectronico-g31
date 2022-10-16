package com.votoElectronico.votoBack.controller;

import com.votoElectronico.votoBack.model.Usuario;
import com.votoElectronico.votoBack.repository.UsuarioRepository;
import com.votoElectronico.votoBack.service.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class Controller {
    @Autowired
    private IUsuarioService usuServi;

    private UsuarioRepository usuarioRepository;

    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public Controller(UsuarioRepository usuarioRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }


    @CrossOrigin(origins="*")
    @PostMapping("/agregar")
    public void agregarUsuario(@RequestBody Usuario usuario){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encodedPassword = encoder.encode(usuario.getPassword());
        usuario.setPassword(encodedPassword);
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

    @CrossOrigin(origins="*")
    @PostMapping("/hhh")
    public void saveUsuario(@RequestBody Usuario user) {

        usuarioRepository.save(user);
    }

    @GetMapping("/users/")
    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }

    @GetMapping("/users/{mail}")
    public Usuario getUsuario(@PathVariable String mail) {
        return usuarioRepository.findByEmail(mail);
    }



}





