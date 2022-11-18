package com.votoElectronico.votoBack.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;

import com.votoElectronico.votoBack.model.Product;
import com.votoElectronico.votoBack.service.ProductService;
import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

//    @Controller
    @CrossOrigin(origins="http://localhost:4200")
    @RestController
//    @RequestMapping("/productos")
    public class ProductoController {

        private final ProductService productService;

        public ProductoController(ProductService productService) {
            this.productService = productService;
        }

        @GetMapping("/products")
        public ResponseEntity<List<Product>> getProducts () {
            return new ResponseEntity<>(productService.getProducts(), HttpStatus.OK);
        }

        @GetMapping("/products/{id}")
        public ResponseEntity<Product> getProduct (@PathVariable("id") Long id) {
            return new ResponseEntity<>(productService.getProduct(id), HttpStatus.OK);
        }

        @PostMapping("/products")
        public ResponseEntity<Product> addProduct (@RequestBody Product product) {
            return new ResponseEntity<>(productService.addProduct(product), HttpStatus.OK);
        }

        @PutMapping("/products/{id}")
        public ResponseEntity<Product> updateProduct (@PathVariable("id") Long id, @RequestBody Product product) {
            return new ResponseEntity<>(productService.updateProduct(id, product), HttpStatus.OK);
        }

        @Transactional
        @DeleteMapping("/products/{id}")
        public ResponseEntity<?> deleteProduct (@PathVariable("id") Long id) {
            productService.deleteProduct(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

