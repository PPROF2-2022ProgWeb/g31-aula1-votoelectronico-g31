package ApiVoto.dto;


public class ProductoDTO {
    private Long id_producto;
    private Long llaveConsumo;
    private Boolean usado = false;
    // foraneas
    private Long id_producto_tipo;


    //CONST GETTERS Y SETTER

    public ProductoDTO() {
    }

    public Long getId_producto() {
        return id_producto;
    }
    public void setId_producto(Long id_producto) {
        this.id_producto = id_producto;
    }
    public Long getLlaveConsumo() {
        return llaveConsumo;
    }
    public void setLlaveConsumo(Long llaveConsumo) {
        this.llaveConsumo = llaveConsumo;
    }

    public Boolean getUsado() {
        return usado;
    }
    public void setUsado(Boolean usado) {
        this.usado = usado;
    }

    public Long getId_producto_tipo() {
        return id_producto_tipo;
    }

    public void setId_producto_tipo(Long id_producto_tipo) {
        this.id_producto_tipo = id_producto_tipo;
    }



}
