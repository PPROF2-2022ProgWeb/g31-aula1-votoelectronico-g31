package ApiVoto.entity;


import javax.persistence.*;

/**

 * Clase que crea instancias de productos que luego consumira el usuario.
-id_producto
-nombre
-llave_consumo / es una clave que te autoriza a crear la votacion que adiquiriste
-usuario / a quien pertenece una ves comprado
-usado / si ya fue creada la votacion o no
-precio

 */

@Entity

public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_producto;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long llaveConsumo;
    @Column
    private Boolean usado = false;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_producto_tipo", insertable = false, updatable = false)
    private Producto_Tipo producto_tipo;
    private Long id_producto_tipo;

/*    @ManyToOne( fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "idUsuario", insertable = false, updatable = false)
    private Usuario usuario;
    private Long idUsuario;*/


    //no usar datos nativos. en @ManyToOne



    public Producto() {
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

    //FORANEAS


    public Producto_Tipo getProducto_tipo() {
        return producto_tipo;
    }

    public void setProducto_tipo(Producto_Tipo producto_tipo) {
        this.producto_tipo = producto_tipo;
    }

    public Long getId_producto_tipo() {
        return id_producto_tipo;
    }

    public void setId_producto_tipo(Long id_producto_tipo) {
        this.id_producto_tipo = id_producto_tipo;
    }

}
