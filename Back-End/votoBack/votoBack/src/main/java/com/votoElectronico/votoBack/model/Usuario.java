package com.votoElectronico.votoBack.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter
@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long idusuario;
    @Column(name = "nombre", nullable = false)
    public String nombre;
    @Column(name = "apellido", nullable = false)
    public  String apellido;

    @Column(name = "dni", nullable = false, unique = true)
    public String dni;

    @Column(name = "telefono", nullable = true)
    public String telefono;

    @Column(name="bajaLogica")
    public Integer bajaLogica = 0;

    public Usuario(){}

    public Usuario(Long id, String nombre, String apellido, String identificacion, String telefono){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=identificacion;
        this.telefono=telefono;
    }
}
