package com.example.demo.DTO;
import lombok.Data;

@Data
public class UserDTO {
    private Long userid;
    private String username;
    private String password;
    private String fullname;
    private String address;
    private String email;
    private String phonenumber;
    private RoleDTO roleDTO;
}
