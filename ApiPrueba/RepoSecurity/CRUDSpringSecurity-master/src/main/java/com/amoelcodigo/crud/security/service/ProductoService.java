package com.amoelcodigo.crud.security.service;

import com.amoelcodigo.crud.security.entity.Producto;
import com.amoelcodigo.crud.security.entity.Usuario;
import com.amoelcodigo.crud.security.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

// esta capa siempre trabaja con producto

@Service
public class ProductoService {

    @Autowired
    ProductoRepository productoRepository;

    public List<Producto> traerTodosService(){
        return productoRepository.findAll();
    }
    public void nuevoProductoService (Producto producto){
        productoRepository.save(producto);
    }

}
