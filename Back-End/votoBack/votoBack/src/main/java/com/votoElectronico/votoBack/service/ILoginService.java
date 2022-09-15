package com.votoElectronico.votoBack.service;

import java.util.Optional;

public interface ILoginService {
    public Optional existeLogin(String mail, String pass);
}
