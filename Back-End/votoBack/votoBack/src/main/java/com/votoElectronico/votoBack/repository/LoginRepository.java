package com.votoElectronico.votoBack.repository;

import com.votoElectronico.votoBack.model.Login;
import com.votoElectronico.votoBack.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LoginRepository <T extends Login> extends JpaRepository<T, Long>  {
    Optional<T> findBy(String mail, String pass);
}
