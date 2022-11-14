package ApiVoto.repository;

import ApiVoto.entity.Producto_Tipo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoTipoRepository extends JpaRepository<Producto_Tipo, Long> {

        boolean existsBynombreProductoTipo(String nombreProductoTipo);
        boolean existsBylinkImagen (String linkImagen);



}
