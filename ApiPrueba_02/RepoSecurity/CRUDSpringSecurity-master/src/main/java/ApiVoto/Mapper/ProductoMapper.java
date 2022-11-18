package ApiVoto.Mapper;

import ApiVoto.dto.ProductoDTO;
import ApiVoto.entity.Producto;
import org.springframework.stereotype.Component;


//mapea dto con producto
@Component
public class ProductoMapper {


    //dto a entidad
    public Producto nuevoProductoEntidad (ProductoDTO productoDTO){
        Producto producto = new Producto();
        producto.setLlaveConsumo(productoDTO.getLlaveConsumo());
        producto.setId_producto_tipo(productoDTO.getId_producto_tipo());
        return producto;
    }

    public Producto nuevoProductoEntidadConTipo (ProductoDTO productoDTO , Long idproducto_Tipo){
        Producto producto = new Producto();
        producto.setLlaveConsumo(productoDTO.getLlaveConsumo());
        producto.setId_producto_tipo(idproducto_Tipo);
        return producto;
    }


    //de entidad a dto

    public ProductoDTO nuevoProductoDTOConTipo (Producto producto , Long idproducto_Tipo){
        ProductoDTO productoDTO = new ProductoDTO();
        productoDTO.setId_producto(producto.getId_producto());
        productoDTO.setLlaveConsumo(idproducto_Tipo);
        productoDTO.setId_producto_tipo(producto.getId_producto());
        return productoDTO;
    }

    public ProductoDTO nuevoProductoDTO (Producto producto){
        ProductoDTO productoDTO = new ProductoDTO();
        productoDTO.setId_producto(producto.getId_producto());
        productoDTO.setLlaveConsumo(producto.getLlaveConsumo());
        productoDTO.setId_producto_tipo(producto.getId_producto());
        return productoDTO;
    }






}
