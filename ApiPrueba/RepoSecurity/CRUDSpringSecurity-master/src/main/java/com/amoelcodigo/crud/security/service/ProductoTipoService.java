package com.amoelcodigo.crud.security.service;

import com.amoelcodigo.crud.security.entity.Producto_Tipo;
import com.amoelcodigo.crud.security.repository.ProductoTipoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// esta capa siempre trabaja con producto

@Service
public class ProductoTipoService {

    @Autowired
    ProductoTipoRepository productoTipoRepository;

    public List<Producto_Tipo> traerTodosService(){
        return productoTipoRepository.findAll();
    }

    public void nuevoProductoService (Producto_Tipo producto_tipo){
        productoTipoRepository.save(producto_tipo);
    }

}
