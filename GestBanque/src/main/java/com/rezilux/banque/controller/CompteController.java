package com.rezilux.banque.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import  com.rezilux.banque.dao.CompteRepository;
import  com.rezilux.banque.entities.Compte;
import  com.rezilux.banque.exceptions.ResourceNotFoundException;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class CompteController {

	@Autowired
	CompteRepository compteRepository;
	
	@GetMapping("/comptes")
	public List<Compte> getComptes(){
		return(List<Compte>)compteRepository.findAll();
	}
	
	
	@PostMapping(path ="/comptes",consumes = "application/json")
	public void addCompte(@RequestBody Compte compte) {
		
		compteRepository.save(compte);
	}
	
	@GetMapping("/comptes/{id}")
	public ResponseEntity<Compte> getCompte(@PathVariable Long id) throws ResourceNotFoundException {
		Compte compte = compteRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Compte non touvé"));
		return ResponseEntity.ok().body(compte);
		
	}
	
	@PutMapping(path="/comptes/{id}",consumes = "application/json")
	public int updateCompte(@RequestBody Compte compte, @PathVariable Long id) {
		int result=0;
	   Optional<Compte> decl =	compteRepository.findById(id);
	   if(decl.isPresent()) {
		  Compte compte0 = decl.get();
		  compte0.setSomme(compte.getSomme());
		  compteRepository.save(compte0);
		  result=1;
	   }
	return result;
		
	}
	
	@DeleteMapping("/comptes/{id}")
	public int deleteCompte(@PathVariable Long id) {
		 Optional<Compte> compte =	compteRepository.findById(id);
		 int result = 0;
		 if(compte.isPresent()) {
			 compteRepository.delete(compte.get());
			 result=1;
		 }
		
		
		
		return result;
		
	}
}
