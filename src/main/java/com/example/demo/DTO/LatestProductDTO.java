package com.example.demo.DTO;

import lombok.Data;

@Data
public class LatestProductDTO {
    private Long productid;
    private Double cost;
    private String image;
    private String name;
}
