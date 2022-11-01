package com.amoelcodigo.crud.security.entity;

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
    private boolean usado;

    //no usar datos nativos. en @ManyToOne
    @ManyToOne
    @JoinColumn(name = "usuario_id")
    Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "id_productoTipo")
    Producto_Tipo producto_tipo;

    public Producto(){}

    public Producto(Long id_producto, Long llaveConsumo, boolean usado, Usuario usuario, Producto_Tipo producto_tipo) {
        this.id_producto = id_producto;
        this.llaveConsumo = llaveConsumo;
        this.usado = usado;
        this.usuario = usuario;
        this.producto_tipo = producto_tipo;
    }

    public Long getId_producto() {
        return id_producto;
    }

    public Long getLlaveConsumo() {
        return llaveConsumo;
    }

    public void setLlaveConsumo(Long llaveConsumo) {
        this.llaveConsumo = llaveConsumo;
    }

    public boolean isUsado() {
        return usado;
    }

    public void setUsado(boolean usado) {
        this.usado = usado;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Producto_Tipo getProducto_tipo() {
        return producto_tipo;
    }

    public void setProducto_tipo(Producto_Tipo producto_tipo) {
        this.producto_tipo = producto_tipo;
    }

    @Override
    public String toString() {
        return "Producto{" +
                "id_producto=" + id_producto +
                ", llaveConsumo=" + llaveConsumo +
                ", usado=" + usado +
                ", usuario=" + usuario +
                ", producto_tipo=" + producto_tipo +
                '}';
    }
}
