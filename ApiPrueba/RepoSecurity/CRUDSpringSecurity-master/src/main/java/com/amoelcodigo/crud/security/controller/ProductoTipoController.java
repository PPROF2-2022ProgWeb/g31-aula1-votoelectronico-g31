package com.amoelcodigo.crud.security.controller;

import com.amoelcodigo.crud.dto.Mensaje;
import com.amoelcodigo.crud.security.entity.Producto_Tipo;
import com.amoelcodigo.crud.security.service.ProductoTipoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productotipo")
@CrossOrigin

public class ProductoTipoController {
    @Autowired
    ProductoTipoService productoTipoService;

    @GetMapping("/todos")
    public List<Producto_Tipo> traerTodos(){
        return productoTipoService.traerTodosService();
    }

    //response entity para traer mensajes

   // guarda asociando el nombre del creador
    @PostMapping("/nuevo")
    public ResponseEntity<?> nuevoProducto(@RequestBody Producto_Tipo producto_tipo){
        productoTipoService.nuevoProductoService(producto_tipo);
        System.out.println("producto guardado : " + producto_tipo.toString());
        return new ResponseEntity<>(new Mensaje("producto creado : " + producto_tipo.toString() ), HttpStatus.CREATED);
    }




}
