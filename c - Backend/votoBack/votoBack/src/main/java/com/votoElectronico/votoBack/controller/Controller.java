package com.votoElectronico.votoBack.controller;

import com.votoElectronico.votoBack.model.Usuario;
import com.votoElectronico.votoBack.repository.UsuarioRepository;
import com.votoElectronico.votoBack.service.CartItemService;
import com.votoElectronico.votoBack.service.IUsuarioService;
import com.votoElectronico.votoBack.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class Controller {
    @Autowired
    private IUsuarioService usuServi;

    private UsuarioRepository usuarioRepository;

    private BCryptPasswordEncoder bCryptPasswordEncoder;

    //----------
//    private final UserService userService;
//    private final ProductService productService;
//    private final CartItemService cartItemService;
//
//    @Autowired
//    private JwtUserDetailsService jwtUserDetailsService;
//
//    @Autowired
//    private JwtUtil jwtUtil;
    //---------

    public Controller(UsuarioRepository usuarioRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }


    @CrossOrigin(origins="*")
    @PostMapping("/agregar")
    public void agregarUsuario(@RequestBody Usuario usuario){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encodedPassword = encoder.encode(usuario.getPassword());
        usuario.setPassword(encodedPassword);
        usuServi.crearUsuario(usuario);
    }

    @GetMapping("/ver/usuarios")
    public List<Usuario> verPersonas(){
        return usuServi.traerUsuarios();
    }

    @DeleteMapping("/delete/{id}")
    public void bajarUsuario(@PathVariable Long id){
        usuServi.bajarUsuario(id);
    }

    
    @GetMapping("/users/")
    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }

    @GetMapping("/users/{mail}")
    public Usuario getUsuario(@PathVariable String mail) {
        return usuarioRepository.findByEmail(mail);
    }

    @CrossOrigin(origins="")
    @PutMapping("/editarUser")
    public void editarUser(@RequestBody Usuario usuario){usuServi.updateUser(usuario);}

    //--------------

//    @GetMapping("/users")
//    public ResponseEntity<List<User>> getUsers () {
//        return new ResponseEntity<>(userService.getUsers(), HttpStatus.OK);
//    }
//
//    @GetMapping("/users/{id}")
//    public ResponseEntity<User> getUser (@PathVariable("id") Long id) {
//        return new ResponseEntity<>(userService.getUser(id), HttpStatus.OK);
//    }
//
//    @PutMapping("/users/{id}")
//    public ResponseEntity<User> updateUser (@PathVariable("id") Long id, @RequestBody Map<String, Object> user) {
//        User newUser = new User(
//                (String) user.get("username"),
//                (String) user.get("password"),
//                (String) user.get("email"),
//                (String) user.get("name"),
//                (String) user.get("address"),
//                (String) user.get("phone")
//        );
//
//        return new ResponseEntity<>(userService.updateUser(id, newUser), HttpStatus.OK);
//    }
//
//    @GetMapping("/users/{id}/cart")
//    public ResponseEntity<List<CartItem>> getUserCart (@PathVariable("id") Long id) {
//        System.out.println(userService.getUser(id).getCartItems().size());
//        return new ResponseEntity<>(userService.getUser(id).getCartItems(), HttpStatus.OK);
//    }
//
//    @PostMapping("/users/{id}/cart/add/{productId}")
//    public ResponseEntity<User> addToUserCart (@PathVariable("id") Long id,
//                                               @PathVariable("productId") Long productId) {
//        User user = userService.getUser(id);
//        Product product = productService.getProduct(productId);
//
//        CartItem cartItem = new CartItem(user, product, 1);
//        cartItemService.addCartItem(cartItem);
//
//        return new ResponseEntity<>(userService.getUser(id), HttpStatus.CREATED);
//    }
//
//    @PutMapping("/users/{id}/cart/update/{productId}")
//    public ResponseEntity<User> updateCartItem (@PathVariable("id") Long id,
//                                                @PathVariable("productId") Long productId,
//                                                @RequestBody CartItem cartItem) {
//        User user = userService.getUser(id);
//        Product product = productService.getProduct(productId);
//
//        cartItem.setPk(new CartItemPK(user, product));
//        cartItemService.updateCartItem(cartItem);
//
//        return new ResponseEntity<>(userService.getUser(id), HttpStatus.OK);
//    }
//
//    @DeleteMapping("/users/{id}/cart/remove/{productId}")
//    public ResponseEntity<User> removeFromUserCart (@PathVariable("id") Long id,
//                                                    @PathVariable("productId") Long productId) {
//        cartItemService.deleteCartItem(id, productId);
//
//        return new ResponseEntity<>(userService.getUser(id), HttpStatus.OK);
//
//    }
}





