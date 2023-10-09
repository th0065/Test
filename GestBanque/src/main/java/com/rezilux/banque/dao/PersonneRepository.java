package com.rezilux.banque.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.rezilux.banque.entities.Personne;


@Repository
public interface PersonneRepository extends CrudRepository<Personne, Long>{

	Optional<Personne>findOneByEmailAndPassword(String email, String password);
	
	Personne findByEmail(String email);
}
