package ApiVoto.controller;

import ApiVoto.dto.Mensaje;
import ApiVoto.service.ProductoTipoService;
import ApiVoto.dto.Producto_TipoDTO;
import ApiVoto.entity.Producto_Tipo;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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

    //crea productoTipo nuevo como admin
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/nuevo")
    public ResponseEntity<?> nuevoProducto(@RequestBody Producto_TipoDTO producto_tipoDTO){

        if(StringUtils.isBlank(producto_tipoDTO.getnombreProductoTipo()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        if(productoTipoService.existsBynombreProductoTipo(producto_tipoDTO.getnombreProductoTipo()))
            return new ResponseEntity(new Mensaje("Ya existe un tipo de producto con ese nombre"), HttpStatus.BAD_REQUEST);
        if(producto_tipoDTO.getLimiteParticipantes_productoTipo() <= 0)
            return new ResponseEntity(new Mensaje("La cantidad de aptos debe ser mayor a 0"), HttpStatus.BAD_REQUEST);
        if(StringUtils.isBlank(producto_tipoDTO.getLinkImagen()))
            return new ResponseEntity(new Mensaje("El link de la imagen es obligatorio"), HttpStatus.BAD_REQUEST);


        Producto_Tipo productoTipo = new Producto_Tipo(producto_tipoDTO.getnombreProductoTipo(),producto_tipoDTO.getLimiteParticipantes_productoTipo(),producto_tipoDTO.getValor(), producto_tipoDTO.getLinkImagen());
        productoTipoService.saveProductoTipo(productoTipo);
        return new ResponseEntity<>(new Mensaje("producto creado : " + productoTipo.toString() ), HttpStatus.CREATED);
    }





}
