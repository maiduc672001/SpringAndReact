package com.example.demo.Entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "latestproducts")
public class LatestProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productid;
    @Column(name = "cost")
    private Double cost;
    @Column(name = "image")
    private String image;
    @Column(name = "name")
    private String name;

}
