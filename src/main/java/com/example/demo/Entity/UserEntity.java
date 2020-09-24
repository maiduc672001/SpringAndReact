package com.example.demo.Entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "user")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userid;
    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;
    @Column(name = "fullname")
    private String fullname;
    @Column(name = "address")
    private String address;
    @Column(name = "email")
    private String email;
    @Column(name = "phonenumber")
    private String phonenumber;
    @ManyToOne
    @JoinColumn(name = "roleid")
    private RoleEntity roleEntity;
    @OneToOne(mappedBy = "userEntity")
    private CartEntity cartEntity;
    @OneToMany(mappedBy = "userEntity")
    private List<CartCommodityEntity> cartCommodityEntityList;
}
