package com.retos.retouno.repository.crud;

import com.retos.retouno.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

/*
 *
 * *
 * *@author Huacal
 * *
 * */
public interface UserCrudRepository extends CrudRepository<User, Integer> {
    Optional<User> findByEmail(String email);
    Optional<User> findByEmailAndAndPassword(String email, String password);
}
