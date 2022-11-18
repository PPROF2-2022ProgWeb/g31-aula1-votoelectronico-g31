package com.votoElectronico.votoBack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class VotoBackApplication {


	public static void main(String[] args) {
		SpringApplication.run(VotoBackApplication.class, args);
	}




}
