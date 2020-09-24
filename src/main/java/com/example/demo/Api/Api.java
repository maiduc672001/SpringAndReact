package com.example.demo.Api;

import com.example.demo.Convert.UserConvert;
import com.example.demo.DTO.UserDTO;
import com.example.demo.Entity.UserEntity;
import com.example.demo.Service.UserService;
import com.example.demo.security.ApiResponse;
import com.example.demo.security.UserPrincipal;
import com.example.demo.security.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class Api {
    @Autowired
    private UserService userService;
    @Autowired
    private UserConvert userConvert;
    @GetMapping("/api/user")
    public UserDTO getUser(){
       UserPrincipal principal= (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserDTO userDTO=userService.getByUsername(principal.getUsername());
        return userDTO;

    }
    @PutMapping("/update/user")
    public ResponseEntity<?> updateUser(@RequestBody UserDTO userDTO){
        if(userService.existsByUsername(userDTO.getUsername())) {
            return new ResponseEntity(new UserResponse(false, "Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        if(userService.existsByEmail(userDTO.getEmail())) {
            return new ResponseEntity(new UserResponse(false, "Email Address already in use!"),
                    HttpStatus.BAD_REQUEST);
        }
        UserEntity entity=userConvert.dtoToEntity(userDTO);
        userService.updateUser(entity);
        return ResponseEntity.ok(userDTO);
    }
}
