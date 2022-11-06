package com.votoElectronico.votoBack.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Getter @Setter
@Entity
public class Usuario implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long idusuario;
    @Column(name = "nombre", nullable = false)
    public String nombre;
    @Column(name = "apellido", nullable = false)
    public  String apellido;

    @Column(name = "dni", nullable = false, unique = true)
    public String dni;

    @Column(name = "email", nullable = false, unique = true)
    public String email;

    @Column(name = "password", nullable = false)
    public String password;

    @Column(name = "telefono", nullable = true)
    public String telefono;

    @Column(name="bajaLogica")
    public Integer bajaLogica = 0;

    @Column(name="rol")
    @Enumerated(EnumType.STRING)
    private Rol rol = Rol.ADMIN;

    public Usuario(){}

    public Usuario(Long id, String nombre, String apellido, String identificacion, String telefono){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=identificacion;
        this.telefono=telefono;
    }

    public long getId() {
        return idusuario;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return null;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    //@Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> roles = new ArrayList<>();
        roles.add(new SimpleGrantedAuthority(rol.toString()));
        return roles;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
