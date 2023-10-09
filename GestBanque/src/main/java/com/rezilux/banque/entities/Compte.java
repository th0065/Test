package com.rezilux.banque.entities;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name="Compte")
public class Compte {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name="dateCreation")
	private LocalDate dateCreation;
	
	@Column(name="dateModif")
	private LocalDate dateModif;
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name="idCompte")
	private Personne personne;
	
	@Column(name="numero",length=100)
	private String numero;
	
	@Column(name="somme")
	private BigDecimal somme;

}
