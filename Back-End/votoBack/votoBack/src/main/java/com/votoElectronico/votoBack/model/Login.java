package com.votoElectronico.votoBack.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Login {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;

    @Column(name = "email", nullable = false, unique = true)
    public String email;

    @Column(name = "password", nullable = false)
    public String password;

    public Login(){}

    public Login(Long id, String mail, String password){
        this.id= id;
        this.email=mail;
        this.password=password;
    }


}
