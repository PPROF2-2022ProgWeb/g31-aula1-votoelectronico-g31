package com.amoelcodigo.crud.security.entity;

import javax.persistence.*;

/** esta entidad permitira al admin crear nuevos productos
 *
 */

@Entity
public class Producto_Tipo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_productoTipo;

    @Column
    private String nombre_productoTipo;

    @Column
    private long limiteParticipantes_productoTipo;


    public Producto_Tipo() {
    }

    public Producto_Tipo(String nombre_productoTipo, long limiteParticipantes_productoTipo) {
        this.nombre_productoTipo = nombre_productoTipo;
        this.limiteParticipantes_productoTipo = limiteParticipantes_productoTipo;
    }

    public String getNombre_productoTipo() {
        return nombre_productoTipo;
    }

    public void setNombre_productoTipo(String nombre_productoTipo) {
        this.nombre_productoTipo = nombre_productoTipo;
    }

    public long getLimiteParticipantes_productoTipo() {
        return limiteParticipantes_productoTipo;
    }

    public void setLimiteParticipantes_productoTipo(long limiteParticipantes_productoTipo) {
        this.limiteParticipantes_productoTipo = limiteParticipantes_productoTipo;
    }

    @Override
    public String toString() {
        return "Producto_Tipo{" +
                "id_productoTipo=" + id_productoTipo +
                ", nombre_productoTipo='" + nombre_productoTipo + '\'' +
                ", limiteParticipantes_productoTipo=" + limiteParticipantes_productoTipo +
                '}';
    }
}
