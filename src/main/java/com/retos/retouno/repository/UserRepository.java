package com.retos.retouno.repository;


import com.retos.retouno.model.User;
import com.retos.retouno.repository.crud.UserCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/*
 *
 * *
 * *@author Huacal
 * *
 * */
@Repository
public class UserRepository {
    @Autowired
    private final UserCrudRepository userCrudRepository;

    public UserRepository(UserCrudRepository userCrudRepository) {
        this.userCrudRepository = userCrudRepository;
    }

    public List<User> getAll(){
        return (List<User>) userCrudRepository.findAll();
    }

    public Optional<User> getUser(int id){
        return  userCrudRepository.findById(id);
    }

    public User save(User user){
        return userCrudRepository.save(user);
    }

    public boolean existEmail(String email){
        Optional<User> usuario = userCrudRepository.findByEmail(email);

        return !usuario.isEmpty();
    }

    public Optional<User> autenticarUsuario(String email, String password) {
        return userCrudRepository.findByEmailAndAndPassword(email, password);
    }
}
