package ApiVoto.entity;

import javax.persistence.*;

/** esta entidad permitira al admin crear nuevos productos
 *
 */

@Entity
public class Producto_Tipo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_productoTipo;

    @Column
    private String nombreProductoTipo;
    @Column
    private long limiteParticipantes_productoTipo;
    @Column
    private long valor;
    @Column
    private String linkImagen;

    public Producto_Tipo() {
    }
    public Producto_Tipo(String nombreProductoTipo, long limiteParticipantes_productoTipo, long valor, String linkImagen) {
        this.nombreProductoTipo = nombreProductoTipo;
        this.limiteParticipantes_productoTipo = limiteParticipantes_productoTipo;
        this.valor = valor;
        this.linkImagen = linkImagen;
    }

    public String getLinkImagen() {
        return linkImagen;
    }

    public void setLinkImagen(String linkImagen) {
        this.linkImagen = linkImagen;
    }

    public String getnombreProductoTipo() {
        return nombreProductoTipo;
    }

    public void setnombreProductoTipo(String nombreProductoTipo) {
        this.nombreProductoTipo = nombreProductoTipo;
    }

    public long getLimiteParticipantes_productoTipo() {
        return limiteParticipantes_productoTipo;
    }

    public void setLimiteParticipantes_productoTipo(long limiteParticipantes_productoTipo) {
        this.limiteParticipantes_productoTipo = limiteParticipantes_productoTipo;
    }
    public long getValor() {
        return valor;
    }

    public void setValor(long valor) {
        this.valor = valor;
    }

}
