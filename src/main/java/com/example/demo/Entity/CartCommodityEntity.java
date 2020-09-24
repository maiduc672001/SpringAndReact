package com.example.demo.Entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "cartcommodity")
public class CartCommodityEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartcommodityid;
    @ManyToOne
    @JoinColumn(name = "userid")
    private UserEntity userEntity;
    @ManyToOne
    @JoinColumn(name = "commodityid")
    private CommodityEntity commodityEntity;
    @Column(name = "amount")
    private Long amount;
}
