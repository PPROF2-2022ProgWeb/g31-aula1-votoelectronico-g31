package ApiVoto.dto;

/** esta entidad permitira al admin crear nuevos productos
 *
 */



public class Producto_TipoDTO {
    private String nombreProductoTipo;
    private long limiteParticipantes_productoTipo;
    private long valor;
    private String linkImagen;

    public Producto_TipoDTO() {
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

    @Override
    public String toString() {
        return "Producto_TipoDTO{" +
                ", nombreProductoTipo='" + nombreProductoTipo + '\'' +
                ", limiteParticipantes_productoTipo=" + limiteParticipantes_productoTipo +
                '}';
    }
}
