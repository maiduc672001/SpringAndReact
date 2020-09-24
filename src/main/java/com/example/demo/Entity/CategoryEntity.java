package com.example.demo.Entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "category")
public class CategoryEntity {
@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryid;
@Column(name = "name")
    private String name;
}
