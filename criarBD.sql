-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`TipoImovel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`TipoImovel` (
  `idTipoImovel` INT NOT NULL,
  `descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTipoImovel`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Usuario` (
  `email` VARCHAR(255) NOT NULL,
  `senha` VARCHAR(32) NOT NULL,
  `nome` VARCHAR(32) NOT NULL,
  `celular` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`email`));


-- -----------------------------------------------------
-- Table `mydb`.`Estado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Estado` (
  `idEstado` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `sigla` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEstado`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Cidade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Cidade` (
  `idCidade` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `estado` INT NOT NULL,
  PRIMARY KEY (`idCidade`),
  INDEX `estado_idx` (`estado` ASC) VISIBLE,
  CONSTRAINT `estado`
    FOREIGN KEY (`estado`)
    REFERENCES `mydb`.`Estado` (`idEstado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Imovel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Imovel` (
  `idImoveis` INT NOT NULL,
  `tipoImovel` INT NOT NULL,
  `nome` VARCHAR(70) NOT NULL,
  `endereco` VARCHAR(70) NOT NULL,
  `complemento` VARCHAR(70) NOT NULL,
  `bairro` VARCHAR(70) NOT NULL,
  `cep` VARCHAR(10) NOT NULL,
  `areaConstruida` DOUBLE NOT NULL,
  `qtdQuarto` INT(5) NOT NULL,
  `qtdBanheiro` INT(5) NOT NULL,
  `descricao` MEDIUMTEXT NOT NULL,
  `valor` DOUBLE NOT NULL,
  `anunciante` VARCHAR(255) NOT NULL,
  `cidade` INT NOT NULL,
  PRIMARY KEY (`idImoveis`),
  INDEX `tipo_idx` (`tipoImovel` ASC) VISIBLE,
  INDEX `vendedor_idx` (`anunciante` ASC) VISIBLE,
  INDEX `cidade_idx` (`cidade` ASC) VISIBLE,
  CONSTRAINT `tipo`
    FOREIGN KEY (`tipoImovel`)
    REFERENCES `mydb`.`TipoImovel` (`idTipoImovel`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `vendedor`
    FOREIGN KEY (`anunciante`)
    REFERENCES `mydb`.`Usuario` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cidade`
    FOREIGN KEY (`cidade`)
    REFERENCES `mydb`.`Cidade` (`idCidade`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
