package com.rezilux.banque.entities;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name="Personne")
public class Personne {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name="dateCreation")
	private LocalDate dateCreation;
	
	@Column(name="dateModif")
	private LocalDate dateModif;
	
	@Column(name="nom",length=55)
	private String nom;
	
	@Column(name="prenom",length=55)
	private String prenom;
	
	@Column(name="email",length=55)
	private String email;
	
   

    @JsonManagedReference
	@OneToMany(mappedBy="personne")
	private List<Compte> comptes;
	
	@Column(name="password",length=55)
	private String password;
	
	@Column(name="isCustomer")
	private Boolean isCustomer;

	
	
}
