package com.amoelcodigo.crud.security.repository;

import com.amoelcodigo.crud.security.entity.Producto_Tipo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoTipoRepository extends JpaRepository <Producto_Tipo, Long> {
}
