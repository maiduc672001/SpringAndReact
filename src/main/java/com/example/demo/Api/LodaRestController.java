package com.example.demo.Api;

import com.example.demo.Convert.RoleConvert;
import com.example.demo.Convert.UserConvert;
import com.example.demo.DTO.UserDTO;
import com.example.demo.Entity.RoleEntity;
import com.example.demo.Entity.UserEntity;
import com.example.demo.Repository.RoleRepository;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Service.UserService;
import com.example.demo.Social.FacebookResponse;
import com.example.demo.Social.GoogleResponse;
import com.example.demo.security.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/auth")
public class LodaRestController {

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder passwordEncoder;
@Autowired
private UserService userService;
@Autowired
private UserConvert userConvert;
@Autowired
private RoleConvert roleConvert;
    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser( @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
    }
    @PostMapping("/signup")
    public ResponseEntity<?> signUser(@RequestBody UserDTO userDTO){
        if(userService.existsByUsernameUpdate(userDTO.getUsername(),userDTO.getUserid())) {
            return new ResponseEntity(new UserResponse(false, "Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        if(userService.existsByEmailUpdate(userDTO.getEmail(),userDTO.getUserid())) {
            return new ResponseEntity(new UserResponse(false, "Email Address already in use!"),
                    HttpStatus.BAD_REQUEST);
        }
        long roleid=2;
        RoleEntity roleEntity=roleRepository.getOne(roleid);
        userDTO.setRoleDTO(roleConvert.entityToDTO(roleEntity));
        UserEntity userEntity=userConvert.dtoToEntity(userDTO);
        userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
        userService.addNewUser(userEntity);
        UserPrincipal userPrincipal=UserPrincipal.create(userEntity);
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userPrincipal, null,
                userPrincipal.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt=tokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
    }
    @PostMapping("signin/google")
    public ResponseEntity<?> loginGoogle(@RequestBody GoogleResponse googleResponse){
        if(googleResponse!=null) {
            UserEntity entity=userRepository.findByEmail(googleResponse.getEmail());
            UserPrincipal userPrincipal=UserPrincipal.create(entity);
            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userPrincipal,null,userPrincipal.getAuthorities());
           SecurityContextHolder.getContext().setAuthentication(authentication);
           String jwt=tokenProvider.generateToken(authentication);
           return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
        }
        return new ResponseEntity(new UserResponse(false, "Error!"),
                HttpStatus.BAD_REQUEST);
    }
    @PostMapping("/signin/facebook")
    public ResponseEntity<?> loginFacebook(@RequestBody FacebookResponse facebookResponse){
        if(facebookResponse!=null) {
            UserEntity entity=userRepository.findByUsername(facebookResponse.getName());
            UserPrincipal userPrincipal=UserPrincipal.create(entity);
            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userPrincipal,null,userPrincipal.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt=tokenProvider.generateToken(authentication);
            return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
        }
        return new ResponseEntity(new UserResponse(false, "Error!"),
                HttpStatus.BAD_REQUEST);
    }
    @PostMapping("signup/google")
    public ResponseEntity<?> signupGoogle(@RequestBody GoogleResponse googleResponse){
        if(googleResponse!=null){
            if(userService.existsByEmail(googleResponse.getEmail())) {
                return new ResponseEntity(new UserResponse(false, "Email is already taken!"),
                        HttpStatus.BAD_REQUEST);
            }
            UserEntity userEntity=new UserEntity();
            userEntity.setEmail(googleResponse.getEmail());
            userEntity.setUsername(googleResponse.getName());
            userEntity.setFullname(googleResponse.getName());
            userEntity.setPassword(passwordEncoder.encode("123456"));
            RoleEntity roleEntity=roleRepository.getOne((long)2);
            userEntity.setRoleEntity(roleEntity);
            userService.addNewUser(userEntity);
            UserPrincipal userPrincipal=UserPrincipal.create(userEntity);
            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userPrincipal, null,
                    userPrincipal.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt=tokenProvider.generateToken(authentication);
            return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
        }
        return new ResponseEntity(new UserResponse(false, "Error!"),
                HttpStatus.BAD_REQUEST);
    }
}
