package ApiVoto.service;


import ApiVoto.dto.ProductoDTO;

// esta capa siempre trabaja con producto

public interface ProductoService {


    ProductoDTO saveDTO(ProductoDTO productoDTO);
    ProductoDTO saveDTOyIdTipo(Long idProductoTipo , ProductoDTO productoDTO );

/*    public List<Producto> traerTodosService(){
        return productoRepository.findAll();
    }
    public void nuevoProductoService (ProductoDTO productoDTO){
        Producto producto = productoMapper.nuevoProductoEntidad(productoDTO);
        productoRepository.save(producto);
    }*/

}
