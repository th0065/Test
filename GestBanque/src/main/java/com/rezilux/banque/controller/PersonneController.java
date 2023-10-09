package com.rezilux.banque.controller;

import java.time.LocalDate;
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

import  com.rezilux.banque.dao.PersonneRepository;

import  com.rezilux.banque.entities.Personne;
import  com.rezilux.banque.exceptions.ResourceNotFoundException;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PersonneController {

	@Autowired
	PersonneRepository personneRepository;
	
	@GetMapping("/personnes")
	public List<Personne> getPersonnes(){
		return(List<Personne>)personneRepository.findAll();
	}
	
	
	@PostMapping(path ="/personnes",consumes = "application/json")
	public Personne addPersonne(@RequestBody Personne personne) {
		Personne p= personneRepository.findByEmail(personne.getEmail());
		if(p==null) {
		Personne perso = personneRepository.save(personne);
		return perso;
		}
		return p;
	}
	
	@PostMapping("/personnes/login")
	public ResponseEntity<Personne> login(@RequestBody Personne personne ) throws ResourceNotFoundException {
		Personne perso = personneRepository.findOneByEmailAndPassword(personne.getEmail(), personne.getPassword())
				.orElseThrow(()->new ResourceNotFoundException("Personne non touvé"));
		return ResponseEntity.ok().body(perso);
		
	}
	
	@GetMapping("/personnes/{id}")
	public ResponseEntity<Personne> getPersonne(@PathVariable Long id) throws ResourceNotFoundException {
		Personne personne = personneRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("PersonneDTO non touvé"));
		return ResponseEntity.ok().body(personne);
		
	}
	
	@PutMapping(path="/personnes/{id}",consumes = "application/json")
	public int updatePersonne(@RequestBody Personne personne, @PathVariable Long id) {
		int result=0;
	   Optional<Personne> decl =	personneRepository.findById(id);
	   if(decl.isPresent()) {
		  Personne personne0 = decl.get();
		  personne0.setNom(personne.getNom());
		  personne0.setPrenom(personne.getPrenom());
		  personne0.setEmail(personne.getEmail());
		  personne0.setPassword(personne.getPassword());
		  personne0.setDateModif(LocalDate.now());
		  personneRepository.save(personne0);
		  result=1;
	   }
	return result;
		
	}
	
	@DeleteMapping("/personnes/{id}")
	public int deletePersonne(@PathVariable Long id) {
		 Optional<Personne> personne =	personneRepository.findById(id);
		 int result = 0;
		 if(personne.isPresent()) {
			 personneRepository.delete(personne.get());
			 result=1;
		 }
		
		
		
		return result;
		
	}
}
