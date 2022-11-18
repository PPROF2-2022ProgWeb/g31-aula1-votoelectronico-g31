package ApiVoto.service;

import ApiVoto.entity.Producto_Tipo;
import ApiVoto.repository.ProductoTipoRepository;
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

    public Producto_Tipo saveProductoTipo(Producto_Tipo producto_Tipo){

        return productoTipoRepository.save(producto_Tipo);
    }

    public void nuevoProductoService (Producto_Tipo producto_tipo){
        productoTipoRepository.save(producto_tipo);
    }

    public boolean existsBynombreProductoTipo(String nombreProductoTipo){
        return productoTipoRepository.existsBynombreProductoTipo(nombreProductoTipo);
    }
    public boolean existsBylinkImagen(String existsBylinkImagen){
        return productoTipoRepository.existsBylinkImagen(existsBylinkImagen);
    }

}
