package ApiVoto.service.serviceImpl;

import ApiVoto.Mapper.ProductoMapper;
import ApiVoto.service.ProductoService;
import ApiVoto.dto.ProductoDTO;
import ApiVoto.entity.Producto;
import ApiVoto.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductoServiceImpl implements ProductoService {
    @Autowired
    ProductoMapper productoMapper;
    @Autowired
    ProductoRepository productoRepository;



    /*    public List<Producto> traerTodosService(){
        return productoRepository.findAll();
    }*/
    @Override
    public ProductoDTO saveDTO (ProductoDTO productoDTO){
        Producto producto = productoMapper.nuevoProductoEntidad(productoDTO);
        Producto productoSaved = productoRepository.save(producto);
        ProductoDTO result =  productoMapper.nuevoProductoDTO(productoSaved);
        return result;
    }

    @Override
    public ProductoDTO saveDTOyIdTipo(Long idproducto_Tipo, ProductoDTO productoDTO) {
        Producto producto = productoMapper.nuevoProductoEntidadConTipo(productoDTO,idproducto_Tipo);
        Producto productoSaved = productoRepository.save(producto);
        ProductoDTO result =  productoMapper.nuevoProductoDTO(productoSaved);
        return result;
    }


/*    //busca el id para ver si existe, si no devuelve invalid
    public void esExistente(Long id, String name) throws Mensaje {
        if(!productoRepository.existsById(id)){
            throw new Mensaje("Invalido " + name);
        }
    }*/

}
