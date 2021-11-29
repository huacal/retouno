package com.retos.retouno.service;


import com.retos.retouno.model.User;
import com.retos.retouno.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/*
 *
 * *
 * *@author Huacal
 * *
 * */
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAll(){
        return  userRepository.getAll();
    }

    public Optional<User> getUser(int id){
        return userRepository.getUser(id);
    }

    public User registrar(User user){
        if (user.getId() == null){
            if (existEmail(user.getEmail()) == false){
                return userRepository.save(user);
            }else {
                return user;

            }
        }else {
            return user;
        }
    }

    public boolean existEmail(String email) {
        return userRepository.existEmail(email);
    }

    public User autenticarUsuario(String email, String password){
        Optional<User> usuario = userRepository.autenticarUsuario(email, password);
        if (usuario.isEmpty()){
            return new User (email, password, "NO DEFINIDO");
        }else{
            return  usuario.get();
        }
    }
}