package com.votoElectronico.votoBack.service;

import com.votoElectronico.votoBack.model.Usuario;
import com.votoElectronico.votoBack.repository.UsuarioRepository;
import org.springframework.mail.MailAuthenticationException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;


import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import static java.util.Collections.emptyList;

@Service
public class UsuarioDetailsServiceImpl implements UserDetailsService {

    private UsuarioRepository usuarioRepository;

    public UsuarioDetailsServiceImpl(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String mail) throws MailAuthenticationException {
        Usuario usuario = usuarioRepository.findByEmail(mail);
        if (usuario == null) {
            throw new MailAuthenticationException(mail);
        }
        return new User(usuario.getEmail(), usuario.getPassword(), emptyList());
    }
}