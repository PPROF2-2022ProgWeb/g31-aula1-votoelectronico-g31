package com.votoElectronico.votoBack.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter @Setter
@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idusuario;
    @Column(name = "nombre", nullable = false)
    private String nombre;
    @Column(name = "apellido", nullable = false)
    private  String apellido;

    @Column(name = "dni", nullable = false, unique = true)
    private String dni;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "telefono", nullable = true)
    private String telefono;

    @Column(name="bajaLogica")
    private Integer bajaLogica = 0;

    public Usuario(){}

    public Usuario(String nombre, String apellido, String identificador, String telefono ,
                   String password, String email){
        //not nulls
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=identificador;
        this.password=password;
        this.email=email;
        //nulls
        this.telefono=telefono;
    }


    //getters y setters

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

    public void setPassword(String password) {
        this.password = password;
    }



}
