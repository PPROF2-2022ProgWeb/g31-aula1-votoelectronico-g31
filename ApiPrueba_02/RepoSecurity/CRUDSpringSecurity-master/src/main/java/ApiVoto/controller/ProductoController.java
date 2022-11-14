package ApiVoto.controller;


import ApiVoto.dto.ProductoDTO;
import ApiVoto.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/producto")
@CrossOrigin
public class ProductoController {
    @Autowired
    ProductoService productoService;



    //response entity para traer mensajes
    @PostMapping("/nuevo")
    public ResponseEntity<ProductoDTO> nuevoProducto(@RequestBody ProductoDTO productoDTO) {
        ProductoDTO productoDTOSaved = productoService.saveDTO(productoDTO);
        System.out.println("producto guardado : " + productoDTO.toString());
        return ResponseEntity.status(HttpStatus.CREATED).body(productoDTOSaved);
    }

    //crea prod con el tipo de producto.

    @PostMapping("/{idProductoTipo}/nuevo")
    public ResponseEntity<ProductoDTO> nuevoProductoConID(@PathVariable Long idProductoTipo , @RequestBody ProductoDTO productoDTO) {

        ProductoDTO productoDTOSaved = productoService.saveDTOyIdTipo(idProductoTipo , productoDTO);
        System.out.println("producto guardado : " + productoDTO.toString());
        return ResponseEntity.status(HttpStatus.CREATED).body(productoDTOSaved);
    }





    /*
    EJEMPLO
    @PostMapping
    public ResponseEntity<GenderDTO> save(@RequestBody GenderDTO gender){
        GenderDTO genderSaved = genderService.save(gender);
        return ResponseEntity.status(HttpStatus.CREATED).body(genderSaved);
    }*/
        /*    @GetMapping("/todos")
    public List<Producto> traerTodos(){
        return productoService.traerTodosService();
    }*/

}
