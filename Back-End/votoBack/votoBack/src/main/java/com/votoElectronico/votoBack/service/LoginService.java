package com.votoElectronico.votoBack.service;

import com.votoElectronico.votoBack.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class LoginService implements ILoginService{

    @Autowired
    public LoginRepository loginrepo;

    public Optional existeLogin(String mail, String pass) {
        return loginrepo.findBy(mail, pass);
    }

}
