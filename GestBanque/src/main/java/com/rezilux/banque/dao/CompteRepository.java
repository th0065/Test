package com.rezilux.banque.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.rezilux.banque.entities.Compte;
import com.rezilux.banque.entities.Personne;



@Repository
public interface CompteRepository extends CrudRepository<Compte, Long>{

	

	

}
