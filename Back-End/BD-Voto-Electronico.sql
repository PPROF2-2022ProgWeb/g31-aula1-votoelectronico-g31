-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema Voto_Electronico
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Voto_Electronico
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Voto_Electronico` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `Voto_Electronico` ;

-- -----------------------------------------------------
-- Table `Voto_Electronico`.`Pais`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Voto_Electronico`.`Pais` (
  `idPais` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idPais`),
  UNIQUE INDEX `Nombre_UNIQUE` (`Nombre` ASC) )
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Voto_Electronico`.`Provincia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Voto_Electronico`.`Provincia` (
  `idProvincia` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `idPais` INT NOT NULL,
  PRIMARY KEY (`idProvincia`),
  UNIQUE INDEX `Nombre_UNIQUE` (`Nombre` ASC) ,
  INDEX `fk_pais_provincia` (`idPais` ASC) ,
  CONSTRAINT `fk_pais_provincia`
    FOREIGN KEY (`idPais`)
    REFERENCES `Voto_Electronico`.`Pais` (`idPais`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Voto_Electronico`.`Ciudad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Voto_Electronico`.`Ciudad` (
  `idCiudad` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `idProvincia` INT NOT NULL,
  PRIMARY KEY (`idCiudad`),
  INDEX `fk_ciudad_provincia` (`idProvincia` ASC) ,
  CONSTRAINT `fk_ciudad_provincia`
    FOREIGN KEY (`idProvincia`)
    REFERENCES `Voto_Electronico`.`Provincia` (`idProvincia`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Voto_Electronico`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Voto_Electronico`.`Usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NULL DEFAULT NULL,
  `Apellido` VARCHAR(45) NULL DEFAULT NULL,
  `Telefono` VARCHAR(45) NULL DEFAULT NULL,
  `DNI` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idusuario`),
  UNIQUE INDEX `idusuario_UNIQUE` (`idusuario` ASC) ,
  UNIQUE INDEX `DNI_UNIQUE` (`DNI` ASC) )
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Voto_Electronico`.`Login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Voto_Electronico`.`Login` (
  `idLogin` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NULL DEFAULT NULL,
  `password` VARCHAR(45) NULL DEFAULT NULL,
  `idusuario` INT NOT NULL,
  PRIMARY KEY (`idLogin`),
  UNIQUE INDEX `idLogin_UNIQUE` (`idLogin` ASC) ,
  INDEX `fk_usuario_login` (`idusuario` ASC) ,
  CONSTRAINT `fk_usuario_login`
    FOREIGN KEY (`idusuario`)
    REFERENCES `Voto_Electronico`.`Usuario` (`idusuario`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Voto_Electronico`.`estado_Votacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Voto_Electronico`.`estado_Votacion` (
  `idestado_Votacion` INT NOT NULL AUTO_INCREMENT,
  `descripcion_estado` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idestado_Votacion`),
  UNIQUE INDEX `idestado_Votacion_UNIQUE` (`idestado_Votacion` ASC) )
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Voto_Electronico`.`Votacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Voto_Electronico`.`Votacion` (
  `idVotacion` INT NOT NULL AUTO_INCREMENT,
  `descripcion_Votacion` VARCHAR(45) NULL DEFAULT NULL,
  `fecha_inicio` DATE NULL DEFAULT NULL,
  `fecha_cierre` DATE NULL DEFAULT NULL,
  `para_Todos` VARCHAR(45) NULL DEFAULT NULL,
  `estado_Votacion_idestado_Votacion` INT NOT NULL,
  `Resultado_idResultado` INT NOT NULL,
  PRIMARY KEY (`idVotacion`),
  UNIQUE INDEX `idVotacion_UNIQUE` (`idVotacion` ASC) ,
  INDEX `fk_Votacion_estado_Votacion1_idx` (`estado_Votacion_idestado_Votacion` ASC) ,
  INDEX `fk_Votacion_Resultado1_idx` (`Resultado_idResultado` ASC) ,
  CONSTRAINT `fk_Votacion_estado_Votacion1`
    FOREIGN KEY (`estado_Votacion_idestado_Votacion`)
    REFERENCES `Voto_Electronico`.`estado_Votacion` (`idestado_Votacion`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Voto_Electronico`.`Resultado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Voto_Electronico`.`Resultado` (
  `idResultado` INT NOT NULL AUTO_INCREMENT,
  `descripcion_Resultado` VARCHAR(45) NULL DEFAULT NULL,
  `idVotacion` INT NOT NULL,
  PRIMARY KEY (`idResultado`),
  UNIQUE INDEX `idResultado_UNIQUE` (`idResultado` ASC) ,
  INDEX `fk_resultado_votacion` (`idVotacion` ASC) ,
  CONSTRAINT `fk_resultado_votacion`
    FOREIGN KEY (`idVotacion`)
    REFERENCES `Voto_Electronico`.`Votacion` (`idVotacion`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Voto_Electronico`.`Rol_Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Voto_Electronico`.`Rol_Usuario` (
  `idRol_Usuario` INT NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idRol_Usuario`),
  UNIQUE INDEX `idRol_Usuario_UNIQUE` (`idRol_Usuario` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Voto_Electronico`.`Ubicacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Voto_Electronico`.`Ubicacion` (
  `idUbicacion` INT NOT NULL AUTO_INCREMENT,
  `idPais` INT NOT NULL,
  `idProvincia` INT NOT NULL,
  `idCiudad` INT NOT NULL,
  `idusuario` INT NOT NULL,
  PRIMARY KEY (`idUbicacion`),
  UNIQUE INDEX `idUbicacion_UNIQUE` (`idUbicacion` ASC) ,
  INDEX `fk_ubicacion_usuario` (`idusuario` ASC) ,
  INDEX `fk_Ubicacion_ciudad` (`idCiudad` ASC) ,
  INDEX `fk_Ubicacion_provincia` (`idProvincia` ASC) ,
  INDEX `fk_Ubicacion_pais` (`idPais` ASC) ,
  CONSTRAINT `fk_Ubicacion_ciudad`
    FOREIGN KEY (`idCiudad`)
    REFERENCES `Voto_Electronico`.`Ciudad` (`idCiudad`),
  CONSTRAINT `fk_Ubicacion_pais`
    FOREIGN KEY (`idPais`)
    REFERENCES `Voto_Electronico`.`Pais` (`idPais`),
  CONSTRAINT `fk_Ubicacion_provincia`
    FOREIGN KEY (`idProvincia`)
    REFERENCES `Voto_Electronico`.`Provincia` (`idProvincia`),
  CONSTRAINT `fk_ubicacion_usuario`
    FOREIGN KEY (`idusuario`)
    REFERENCES `Voto_Electronico`.`Usuario` (`idusuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Voto_Electronico`.`opcion_Votacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Voto_Electronico`.`opcion_Votacion` (
  `idopcion_Votacion` INT NOT NULL AUTO_INCREMENT,
  `Votacion_idVotacion` INT NOT NULL,
  `usuario_idusuario` INT NOT NULL,
  PRIMARY KEY (`idopcion_Votacion`),
  UNIQUE INDEX `idopcion_Votacion_UNIQUE` (`idopcion_Votacion` ASC) ,
  INDEX `fk_opcion_Votacion_Votacion1_idx` (`Votacion_idVotacion` ASC) ,
  INDEX `fk_opcion_Votacion_usuario1_idx` (`usuario_idusuario` ASC) ,
  CONSTRAINT `fk_opcion_Votacion_usuario1`
    FOREIGN KEY (`usuario_idusuario`)
    REFERENCES `Voto_Electronico`.`usuario` (`idusuario`),
  CONSTRAINT `fk_opcion_Votacion_Votacion1`
    FOREIGN KEY (`Votacion_idVotacion`)
    REFERENCES `Voto_Electronico`.`Votacion` (`idVotacion`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Voto_Electronico`.`desc_Voto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Voto_Electronico`.`desc_Voto` (
  `idDesc_Voto` INT NOT NULL AUTO_INCREMENT,
  `descripcion_Voto` VARCHAR(45) NULL DEFAULT NULL,
  `fecha_voto` DATE NULL DEFAULT NULL,
  `Votacion_idVotacion` INT NOT NULL,
  `usuario_idusuario` INT NOT NULL,
  `opcion_Votacion_idopcion_Votacion` INT NOT NULL,
  PRIMARY KEY (`idDesc_Voto`),
  UNIQUE INDEX `idDesc_Voto_UNIQUE` (`idDesc_Voto` ASC) ,
  INDEX `fk_desc_Voto_Votacion1_idx` (`Votacion_idVotacion` ASC) ,
  INDEX `fk_desc_Voto_usuario1_idx` (`usuario_idusuario` ASC) ,
  INDEX `fk_desc_Voto_opcion_Votacion1_idx` (`opcion_Votacion_idopcion_Votacion` ASC) ,
  CONSTRAINT `fk_desc_Voto_opcion_Votacion1`
    FOREIGN KEY (`opcion_Votacion_idopcion_Votacion`)
    REFERENCES `Voto_Electronico`.`opcion_Votacion` (`idopcion_Votacion`),
  CONSTRAINT `fk_desc_Voto_usuario1`
    FOREIGN KEY (`usuario_idusuario`)
    REFERENCES `Voto_Electronico`.`Usuario` (`idusuario`),
  CONSTRAINT `fk_desc_Voto_Votacion1`
    FOREIGN KEY (`Votacion_idVotacion`)
    REFERENCES `Voto_Electronico`.`Votacion` (`idVotacion`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Voto_Electronico`.`grupo_det`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Voto_Electronico`.`grupo_det` (
  `idgrupo_det` INT NOT NULL AUTO_INCREMENT,
  `Descripcion_grupo` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idgrupo_det`),
  UNIQUE INDEX `idgrupo_det_UNIQUE` (`idgrupo_det` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Voto_Electronico`.`grupo_Votacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Voto_Electronico`.`grupo_Votacion` (
  `idgrupo_Votacion` INT NOT NULL,
  `Votacion_idVotacion` INT NOT NULL,
  `grupo_det_idgrupo_det` INT NOT NULL,
  PRIMARY KEY (`idgrupo_Votacion`),
  INDEX `fk_grupo_Votacion_Votacion1_idx` (`Votacion_idVotacion` ASC) ,
  INDEX `fk_grupo_Votacion_grupo_det1_idx` (`grupo_det_idgrupo_det` ASC) ,
  CONSTRAINT `fk_grupo_Votacion_grupo_det1`
    FOREIGN KEY (`grupo_det_idgrupo_det`)
    REFERENCES `Voto_Electronico`.`grupo_det` (`idgrupo_det`),
  CONSTRAINT `fk_grupo_Votacion_Votacion1`
    FOREIGN KEY (`Votacion_idVotacion`)
    REFERENCES `Voto_Electronico`.`Votacion` (`idVotacion`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Voto_Electronico`.`grupo_int`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Voto_Electronico`.`grupo_int` (
  `idgrupo_int` INT NOT NULL AUTO_INCREMENT,
  `grupo_det_idgrupo_det` INT NOT NULL,
  `usuario_idusuario` INT NOT NULL,
  PRIMARY KEY (`idgrupo_int`),
  UNIQUE INDEX `idgrupo_int_UNIQUE` (`idgrupo_int` ASC) ,
  INDEX `fk_grupo_int_grupo_det1_idx` (`grupo_det_idgrupo_det` ASC) ,
  INDEX `fk_grupo_int_usuario1_idx` (`usuario_idusuario` ASC) ,
  CONSTRAINT `fk_grupo_int_grupo_det1`
    FOREIGN KEY (`grupo_det_idgrupo_det`)
    REFERENCES `Voto_Electronico`.`grupo_det` (`idgrupo_det`),
  CONSTRAINT `fk_grupo_int_usuario1`
    FOREIGN KEY (`usuario_idusuario`)
    REFERENCES `Voto_Electronico`.`Usuario` (`idusuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Voto_Electronico`.`usuario_Y_Rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Voto_Electronico`.`usuario_Y_Rol` (
  `idusuario_Y_Rol` INT NOT NULL,
  `Rol_Usuario_idRol_Usuario` INT NOT NULL,
  `usuario_idusuario` INT NOT NULL,
  PRIMARY KEY (`idusuario_Y_Rol`),
  UNIQUE INDEX `idusuario_Y_Rol_UNIQUE` (`idusuario_Y_Rol` ASC) ,
  INDEX `fk_usuario_Y_Rol_Rol_Usuario1_idx` (`Rol_Usuario_idRol_Usuario` ASC) ,
  INDEX `fk_usuario_Y_Rol_usuario1_idx` (`usuario_idusuario` ASC) ,
  CONSTRAINT `fk_usuario_Y_Rol_Rol_Usuario1`
    FOREIGN KEY (`Rol_Usuario_idRol_Usuario`)
    REFERENCES `Voto_Electronico`.`Rol_Usuario` (`idRol_Usuario`),
  CONSTRAINT `fk_usuario_Y_Rol_usuario1`
    FOREIGN KEY (`usuario_idusuario`)
    REFERENCES `Voto_Electronico`.`Usuario` (`idusuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
