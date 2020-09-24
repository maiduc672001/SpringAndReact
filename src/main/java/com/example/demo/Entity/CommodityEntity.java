package com.example.demo.Entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "commodity")
public class CommodityEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commodityid;
    @Column(name = "name")
    private String name;
    @Column(name = "cost")
    private Double cost;
    @ManyToOne
    @JoinColumn(name = "categoryid")
    private CategoryEntity categoryEntity;
    @Column(name = "image")
    private String image;
    @Column(name = "description")
    private String description;
    @Column(name = "information")
    private String information;
    @Column(name = "shortdescription")
    private String shortdescription;
    @Column(name = "sale")
    private Double sale;
    @Column(name = "amount")
    private Integer amount;
    @OneToMany(mappedBy = "commodityEntity")
    private List<CartCommodityEntity> cartCommodityEntities;
}
