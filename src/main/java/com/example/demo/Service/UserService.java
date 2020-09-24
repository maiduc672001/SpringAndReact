package com.example.demo.Service;

import com.example.demo.Convert.UserConvert;
import com.example.demo.DTO.UserDTO;
import com.example.demo.Entity.CartEntity;
import com.example.demo.Entity.RoleEntity;
import com.example.demo.Entity.UserEntity;
import com.example.demo.Repository.CartRepository;
import com.example.demo.Repository.RoleRepository;
import com.example.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserConvert userConvert;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private CartRepository cartRepository;
public UserDTO getByUsername(String username){
    UserEntity entity=userRepository.findByUsername(username);
    return userConvert.entityToDto(entity);
}
    public String addNewUser(UserEntity userEntity){
        userRepository.save(userEntity);
        CartEntity cartEntity=new CartEntity();
        cartEntity.setUserEntity(userEntity);
        cartRepository.save(cartEntity);
        return "Đã thêm thành công";
    }
    public boolean existsByUsername(String username ){
    UserEntity entity=userRepository.findByUsername(username);
    return entity!=null;
    }
    public boolean existsByEmail(String email){
    UserEntity entity=userRepository.findByEmail(email);
    return entity!=null;
    }
    public String updateUser(UserEntity entity){
    userRepository.save(entity);
    return "Cập nhật thành công";
    }
    public boolean existsByUsernameUpdate(String username,Long id){
    UserEntity entity=userRepository.findByUsername(username);
    if(entity==null){
        return false;
    }else if(entity.getUserid()==id){
        return false;
    }else {
        return true;
    }
    }
    public boolean existsByEmailUpdate(String email,Long id){
        UserEntity entity=userRepository.findByEmail(email);
        if(entity==null){
            return false;
        }else if(entity.getUserid()==id){
            return false;
        }else {
            return true;
        }
    }
}
