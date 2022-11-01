package com.amoelcodigo.crud.security.controller;

import com.amoelcodigo.crud.dto.Mensaje;
import com.amoelcodigo.crud.security.entity.Producto;
import com.amoelcodigo.crud.security.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/producto")
@CrossOrigin
public class ProductoController {
    @Autowired
    ProductoService productoService;

    @GetMapping("/todos")
    public List<Producto> traerTodos(){
        return productoService.traerTodosService();
    }
    //response entity para traer mensajes


    // guarda asociando el nombre del creador
    @PostMapping("/nuevo")
    public ResponseEntity<?> nuevoProducto(@RequestBody Producto producto ){
        productoService.nuevoProductoService(producto);
        System.out.println("producto guardado : " + producto.toString());
        return new ResponseEntity<>(new Mensaje("producto creado : " + producto.toString() ), HttpStatus.CREATED);
    }




}
